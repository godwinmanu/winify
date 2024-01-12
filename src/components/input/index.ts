import styles from "./index.scss";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import React from "react";
import { createComponent } from "@lit/react";
import "external-svg-loader";

@customElement("w-input")
class WInput extends LitElement {
  static styles = unsafeCSS(styles);

  /**
   * Set the size of the Input on screens
   */
  @property()
  size: "small" | "medium" | "large" = "medium";

  /**
   * When set to true, disable the Input and make it not not mutable, focusable
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * Set an icon as the Input ornament. Expect a text icon like emoji (😋) or a valid link to an SVG file
   */
  @property()
  icon: string = "";

  // Render the UI as a function of component state
  render() {
    return html`<input />`;
  }
}

// Match tag name with corresponding HTML element
declare global {
  interface HTMLElementTagNameMap {
    "w-input": WInput;
  }
}

// Build component wrapper for react environment
export const Input = createComponent({
  tagName: "w-input",
  elementClass: WInput,
  react: React,
});
