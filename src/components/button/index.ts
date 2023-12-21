import styles from "./index.scss";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import React from "react";
import { createComponent } from "@lit/react";
import "external-svg-loader";

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
   * When set to true, disable the button and make it not not mutable, focusable
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * Useful to indicate an asynchronous action execution, a request, ...
   */
  @property({ type: Boolean })
  loading: boolean = false;

  /**
   * Applies a rounded edge to the button.
   */
  @property({ type: Boolean })
  rounded: boolean = false;

  /**
   * Set an icon as the button ornament. Expect a text icon like emoji (😋) or a valid link to an SVG file
   */
  @property()
  icon: string = "";

  /**
   * Expect a link to an SVG icon in order to the loader
   */
  @property()
  spinner: string = "";

  // Render the UI as a function of component state
  render() {
    return html`<button
      part="button"
      class=${`w-button ${this.variant} ${this.size} ${
        this.rounded ? "rounded" : ""
      }`}
      ?disabled=${this.disabled || this.loading}
    >
      ${this.loading || this.icon
        ? html`<span class="spinner-and-icon">
            ${this.loading
              ? this.spinner
                ? html`<object class="svg" data=${this.spinner}></object> `
                : html`<span class="default-spinner"></span>`
              : null}
            ${this.icon.includes(".svg")
              ? html`<object class="svg" data=${this.icon}></object> `
              : this.icon}
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
