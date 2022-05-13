import { LitElement, html, css, customElement } from 'lit-element';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vertical-layout/src/vaadin-vertical-layout.js';
import '@vaadin/button/src/vaadin-button.js';
import '@vaadin/text-field/src/vaadin-text-field.js';

@customElement('authorization-view')
export class AuthorizationView extends LitElement {
  static get styles() {
    return css`
      :host {
          display: block;
          height: 100%;
      }
      .center {
          display: block;
          margin-left: auto;
          margin-right: auto;
}
      `;
  }

  render() {
    return html`
<vaadin-vertical-layout style="width: 100%; height: 100%; align-items: center; justify-content: center;">
 <div style="height: 60%; flex-shrink: 0; flex-grow: 0;">
  <img id="logo" style="width: 25%;" src="img\logos\loginLogo.png" alt="Logo img" class="center">
  <vaadin-vertical-layout class="center" style="align-items: center; justify-content: center; align-content: center; flex-direction: column; width: 100%; height: 100%;">
   <h1 class="center">Добро пожаловать!</h1>
   <vaadin-text-field type="text" placeholder="Логин" id="login-text-field" style="width: 100%;"></vaadin-text-field>
   <vaadin-text-field type="text" placeholder="Пароль" id="password-text-field" style="width: 100%;"></vaadin-text-field>
   <vaadin-button style="width: 50%;" tabindex="0" id="login-button" class="center">
     Войти 
   </vaadin-button>
  </vaadin-vertical-layout>
 </div>
</vaadin-vertical-layout>
`;
  }

  // Remove this method to render the contents of this view inside Shadow DOM
  createRenderRoot() {
    return this;
  }
}
