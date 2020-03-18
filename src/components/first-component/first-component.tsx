import { Component, ComponentInterface, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'first-component',
  styleUrl: 'first-component.css',
  shadow: true
})
export class FirstComponent implements ComponentInterface {
  /** text is property */
  @Prop() text: string = 'ボタン';

  @State() checked: boolean = false;

  private toggleChecked = () => {
    this.checked = !this.checked;
  }

  render() {
    return (
      <Host>
        <button
          onClick={this.toggleChecked}
          class={(this.checked && 'checked')}>
          {this.text}
        </button>
      </Host>
    );
  }

}
