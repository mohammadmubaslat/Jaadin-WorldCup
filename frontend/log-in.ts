import { LitElement, html, css, customElement } from 'lit-element';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/text-field/src/vaadin-text-field.js';

@customElement('log-in')
export class LogIn extends LitElement {
  static get styles() {
    return css`
      :host {
          display: block;
          height: 100%;
      }
      `;
  }

  render() {
    return html`
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vaadin-vertical-layout theme="spacing" style="align-self: center; width: 400px;">
  <h1 style="align-self: center;">Login Page</h1>
  <vaadin-text-field error-message="Please enter a value" required invalid="" label="Email" style="align-self: stretch;" type="text"></vaadin-text-field>
  <vaadin-text-field error-message="Please enter a value" required invalid="" label="Password" style="align-self: stretch;" type="text"></vaadin-text-field>
  <vaadin-button style="align-self: center; width: 200px;">
   Login
  </vaadin-button>
 </vaadin-vertical-layout>
</vaadin-vertical-layout>
`;
  }

  // Remove this method to render the contents of this view inside Shadow DOM
  createRenderRoot() {
    return this;
  }
}
