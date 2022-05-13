import { LitElement, html, css, customElement } from 'lit-element';
import '@vaadin/horizontal-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/text-field/src/vaadin-text-field.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/button/src/vaadin-button.js';

@customElement('header-view')
export class HeaderView extends LitElement {
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
<vaadin-horizontal-layout style="width: 100%; flex-basis: var(--lumo-size-l); flex-shrink: 0; background-color: var(--lumo-contrast-10pct); flex-grow: 0; flex-direction: row;">
 <img style="width: 10%; margin: var(--lumo-space-s); flex-shrink: 0; align-self: center;" src="img/logos/loginLogo.png">
 <vaadin-text-field placeholder="Поиск" style="flex-shrink: 0; flex-grow: 1; align-self: center; margin: var(--lumo-space-s);" type="text">
  <iron-icon icon="lumo:search" slot="prefix"></iron-icon>
 </vaadin-text-field>
 <vaadin-button style="margin: var(--lumo-space-s); align-self: center; flex-shrink: 0; flex-grow: 0;" tabindex="0">
  <iron-icon icon="lumo:edit" slot="prefix"></iron-icon>FAQ
 </vaadin-button>
 <vaadin-button style="align-self: center; margin: var(--lumo-space-s); flex-shrink: 0;" tabindex="0">
  <iron-icon icon="lumo:edit" slot="prefix"></iron-icon>999
 </vaadin-button>
 <vaadin-button style="flex-shrink: 0; margin: var(--lumo-space-s); align-self: center;" tabindex="0">
  <iron-icon icon="lumo:edit" slot="prefix"></iron-icon>Корзина
 </vaadin-button>
</vaadin-horizontal-layout>
`;
  }

  // Remove this method to render the contents of this view inside Shadow DOM
  createRenderRoot() {
    return this;
  }
}
