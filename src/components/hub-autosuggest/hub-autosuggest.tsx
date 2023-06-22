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

  @State() suggestions = [];
  @State() sections = {};

  @Watch('term')
  // Placeholder function
  async fetchSuggestions(queryTerm) {
    // TODO: the Search docs need to be cleaned up
    const options = {
      site: "https://opendata.dc.gov",
      requestOptions: {
        hubApiUrl: "https://hub.arcgis.com"
      }
    };
    const results = await hubSearch({
      targetEntity: "item",
      filters: [
        { predicates: [{term: queryTerm}] }
      ]
    }, options);
    const items:IHubSearchResult[] = results.results;
    this.sections = groupBy(items, 'family')
    console.debug("Results", results, this.sections)
  }

  componentWillLoad() {
    this.fetchSuggestions(this.term);
  }

  render() {
    return (
      <div>
        {Object.keys(this.sections).map((section) => {
          return(
            <hub-autosuggest-section name={section} data={this.sections[section]}></hub-autosuggest-section>
          )
        })}
        {/* <hub-autosuggest-action name='Try out AI'></hub-autosuggest-action> */}
      </div>
    );
  }
}
