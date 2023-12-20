import styles from "./index.scss";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import React from "react";
import { createComponent } from "@lit/react";

@customElement("w-button")
class WButton extends LitElement {
  static styles = unsafeCSS(styles);

  /**
   * Set the visual style of the button
   */
  @property()
  variant: "contain" | "outline" | "ghost" | "link" = "contain";

  /**
   * Set the size of the button on screens
   */
  @property()
  size: "small" | "medium" | "large" = "medium";

  /**
   * Set URL of the page the link goes to
   */
  @property()
  href: string = "";

  /**
   * Boolean. When set to true, disable the button and make it not not mutable, focusable
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * Boolean. Useful to indicate an asynchronous action execution, a request, ...
   */
  @property({ type: Boolean })
  loading: boolean = false;

  /**
   * Set an icon as the button ornament
   */
  @property()
  icon?: string = "";

  // Render the UI as a function of component state
  render() {
    return html`<button
      part="button"
      class=${`w-button ${this.variant} ${this.size}`}
      ?disabled=${this.disabled || this.loading}
    >
      ${this.loading || this.icon
        ? html`<span class="spinner-icon">
            ${this.loading ? html`<span class="spinner"></span>` : null}
            <span class="icon">${this.icon}</span>
          </span>`
        : null}
      ${this.variant !== "link"
        ? html`<slot></slot>`
        : html`<a href=${this.href} rel="noreferrer"><slot></slot></a>`}
    </button>`;
  }
}

// Match tag name with corresponding HTML element
declare global {
  interface HTMLElementTagNameMap {
    "w-button": WButton;
  }
}

// Build component wrapper for react environment
export const Button = createComponent({
  tagName: "w-button",
  elementClass: WButton,
  react: React,
});
