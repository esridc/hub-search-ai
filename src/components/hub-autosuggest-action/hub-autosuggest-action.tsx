
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hub-autosuggest-action',
  styleUrl: 'hub-autosuggest-action.css',
  shadow: true,
})
export class HubAutosuggestAction {
  @Prop() name: string;

  // Placeholder function
  handleAction() {
    // "Try out AI" action goes here
  }

  render() {
    return (
      <div onClick={() => this.handleAction()}>
        {this.name}
      </div>
    );
  }
}
