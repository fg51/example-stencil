import { Component, ComponentInterface, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'first-component',
  styleUrl: 'first-component.css',
  shadow: true
})
export class FirstComponent implements ComponentInterface {
  @Prop({mutable: true}) text: string = 'ボタン';

  @State() checked: boolean = false;

  toggleChecked() {
    this.checked = !this.checked;
  }

  render() {
    return (
      <Host>
        <button
          onClick={()=> this.toggleChecked() }
          class={(this.checked && "checked")}>
          {this.text}
        </button>
      </Host>
    );
  }

}
