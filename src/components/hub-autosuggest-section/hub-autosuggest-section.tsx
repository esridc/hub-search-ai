
import { IHubSearchResult } from '@esri/hub-common';
import { Component, Prop, h } from '@stencil/core';

  @Component({
    tag: 'hub-autosuggest-section',
    styleUrl: 'hub-autosuggest-section.css',
    shadow: true,
  })
  export class HubAutosuggestSection {
    @Prop() name: string;
    @Prop() data: Array<any>;
  
    render() {
      return (
        <div class="section">
          <div class="section-name">{this.name}</div>
          <ul class="section-results">
            {this.data.map(item => <li>{this.renderResult(item)}</li>)}
          </ul>
        </div>
      );
    }
    renderResult(result: IHubSearchResult) {
      return (
        <div class="result">
          <a target="_new" href={`https://opendata.dc.gov/content/${result.id}`}>
            <div class="name">{result.name}</div>
            <div class="source">{result.source || result.owner}</div>
          </a>
        </div>
      )
      
    }
  }
  