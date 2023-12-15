import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import React from "react";
import { createComponent } from "@lit/react";
import { resetStyles } from "../assets/reset.css";

@customElement("w-button")
class WButton extends LitElement {
  static styles = [resetStyles];

  // Set background color of the button
  @property({ attribute: "bg-color" })
  bgColor: string = "#405058" /* "#505050" */;

  // Set text color of the button
  @property()
  color: string = "#fff";

  // Set the type of the button
  @property()
  variant: "outline" | "ghost" | "link" | "contain" = "contain";

  // Set the size of the button on screens
  @property()
  size: "lg" | "md" | "sm" = "md";

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
    return html` <style>
        button {
          border: none;
          min-width: 2rem;
          height: 2.5rem;
          padding: 0.3rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          color: var(--w-color, ${unsafeCSS(this.color)});
          font-weight: 600;
          background-color: var(
            --w-background-color,
            ${unsafeCSS(this.bgColor)}
          );
        }

        /* Default (contain) variant style */
        button:hover {
          background-color: ${unsafeCSS(this.bgColor)}ef;
        }

        /* Outline variant style */
        button.outline {
          color: ${unsafeCSS(this.bgColor)};
          background-color: transparent;
          border: 2px solid ${unsafeCSS(this.bgColor)};
        }

        button.outline:hover,
        button.outline:focus {
          background-color: ${unsafeCSS(this.bgColor)}10;
        }

        button.outline:active {
          background-color: ${unsafeCSS(this.bgColor)}05;
        }

        button:disabled {
          background-color: grey;
          pointer-events: none;
        }

        button span {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      </style>

      <button class=${this.variant} ?disabled=${this.disabled}>
        <span> ${this.loading ? "" : null} </span>
        ${this.icon}
        <slot></slot>
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
