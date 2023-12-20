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
   * Set the link URL
   */
  @property()
  href: string = "";

  // When set to true, disabled the button
  @property({ type: Boolean })
  disabled: boolean = false;

  // Useful to indicate an asynchronous action execution, a request, ...
  @property({ type: Boolean })
  loading: boolean = false;

  // Set an icon as the button ornament
  @property()
  icon?: string = "";

  // Render the UI as a function of component state
  render() {
    return html`<button
      part="button"
      class=${`w-button ${this.variant}`}
      ?disabled=${this.disabled}
    >
      <span> ${this.loading ? "" : null} </span>
      ${this.icon}
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
