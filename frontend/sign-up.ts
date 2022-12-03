import { LitElement, html, css, customElement } from 'lit-element';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/text-field/src/vaadin-text-field.js';

@customElement('sign-up')
export class SignUp extends LitElement {
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
<vaadin-vertical-layout style="height: 100%; width: 100%; align-items: center;">
 <vaadin-vertical-layout theme="spacing" style="width: 400px; align-self: center;">
  <h1 style="color:red;align-self: center; padding: var(--lumo-space-m);">Signup Page</h1>
  <vaadin-text-field error-message="Please enter a value" required invalid="" label="First Name" style="flex-grow: 0; align-self: stretch;" type="text">
    First Name 
  </vaadin-text-field>
  <vaadin-text-field error-message="Please enter a value" required invalid="" label="Last Name" style="align-self: stretch;" type="text"></vaadin-text-field>
  <vaadin-text-field error-message="Please enter a value" required invalid="" label="Email" style="align-self: stretch;" type="text"></vaadin-text-field>
  <vaadin-text-field error-message="Please enter a value" required invalid="" label="Password" style="align-self: stretch;" type="text"></vaadin-text-field>
  <vaadin-button style="border:1px solid black;align-self: center; margin: var(--lumo-space-m);">
    Sign Up 
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
