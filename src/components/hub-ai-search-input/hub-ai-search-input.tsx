import { Component, Prop, State, h } from '@stencil/core';
import '@esri/calcite-components';


@Component({
  tag: 'hub-ai-search-input',
  styleUrl: 'hub-ai-search-input',
  shadow: true,
})
export class HubAiSearchInput {
  @Prop() api: string = "ogc";

  @State() term: string;

  handleInput(e) {
    this.term = e.target.value;
  }
  
  onSwitchChange(event: CustomEvent) {
    const checked = (event.target as any).checked;
    if ( checked ) { 
      this.api = "portal"
    } else {
      this.api = "ogc"
    }
    event.stopPropagation();
  }

  render() {
    return ([
      <div id='announce' class='visually-hidden' aria-live="assertive"></div>,

      <div id="searchfield">
      <form>
        <calcite-label layout="inline">
            OGC API
            <calcite-switch onCalciteSwitchChange={ev => this.onSwitchChange(ev)}></calcite-switch>
            Portal API
        </calcite-label>
        <label >Search</label>
            <calcite-input 
              role="combobox" 
              id="search" 
              class="biginput" 
              autocomplete="off" 
              aria-owns="res" 
              aria-autocomplete="both"
              type="text" 
              placeholder="Search..." 
              onInput={(event) => this.handleInput(event)} 
            />
        {this.term && <hub-autosuggest term={this.term} api={this.api}></hub-autosuggest>}
        </form>
      </div>
    ]);
  }
}
