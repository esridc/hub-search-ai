
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
        <div>
          <h3>{this.name}</h3>
          <ul>
            {this.data.map(item => <li><a target="_new" href={`https://opendata.dc.gov/content/${item.id}`}>{item.name}</a></li>)}
          </ul>
        </div>
      );
    }
  }
  