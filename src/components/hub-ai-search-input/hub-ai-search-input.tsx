import { Component, State, h } from '@stencil/core';
import '@esri/calcite-components';

@Component({
  tag: 'hub-ai-search-input',
  styleUrl: 'hub-ai-search-input',
  shadow: true,
})
export class HubAiSearchInput {
  @State() term: string;

  handleInput(e) {
    this.term = e.target.value;
  }

  render() {
    return ([
      <div id='announce' class='visually-hidden' aria-live="assertive"></div>,

      <div id="searchfield">
      <form>
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
        {this.term && <hub-autosuggest term={this.term}></hub-autosuggest>}
        </form>
      </div>
    ]);
  }
}
