import { IHubSearchResult, hubSearch } from '@esri/hub-common';
import { Component, Prop, State, Watch, h } from '@stencil/core';

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


@Component({
  tag: 'hub-autosuggest',
  styleUrl: 'hub-autosuggest.css',
  shadow: true,
})
export class HubAutosuggest {
  @Prop() term: string;
  @Prop() api: string = "ogc";
  
  @State() suggestions = [];
  @State() sections = {};
  @State() loading:boolean = true;

  @Watch('term')
  @Watch('api')
  // Placeholder function
  async fetchSuggestions() {
    const queryTerm = this.term;
    // TODO: the Search docs need to be cleaned up
    const options = {
      requestOptions: {} 
    } as { [key: string]: any};

    console.info(`Using ${this.api} API`)
    if (this.api === "ogc") {
      options.site = "https://opendata.dc.gov",
      options.requestOptions.hubApiUrl = "https://hub.arcgis.com";
    } else {
      options.requestOptions.portal = "https://www.arcgis.com/sharing/rest";
    }
    
    const results = await hubSearch({
      targetEntity: "item",
      filters: [
        { predicates: [{term: queryTerm}] }
      ]
    }, options);

    this.loading = true;
    const items:IHubSearchResult[] = results.results;
    this.sections = groupBy(items, 'family')
    console.debug("Results", results, this.sections)
    this.loading = false;
  }

  componentWillLoad() {
    this.fetchSuggestions();
  }

  render() {
    return (
      <div>
        {this.loading ? this.renderLoading() : null}
        {Object.keys(this.sections).map((section) => {
          return(
            <hub-autosuggest-section name={section} data={this.sections[section]}></hub-autosuggest-section>
          )
        })}
        {/* <hub-autosuggest-action name='Try out AI'></hub-autosuggest-action> */}
      </div>
    );
  }
  renderLoading() {
    return <em>loading...</em>;
  }
}
