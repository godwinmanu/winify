import { LitElement } from "lit";
import "external-svg-loader";
declare class WButton extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Set the visual style of the button
     */
    variant: "contain" | "outline" | "ghost" | "link";
    /**
     * Set the size of the button on screens
     */
    size: "small" | "medium" | "large";
    /**
     * Set URL of the page the link goes to
     */
    href: string;
    /**
     * Boolean. When set to true, disable the button and make it not not mutable, focusable
     */
    disabled: boolean;
    /**
     * Boolean. Useful to indicate an asynchronous action execution, a request, ...
     */
    loading: boolean;
    /**
     * Set an icon as the button ornament. Expect a text icon like emoji (😋) or a valid link to an SVG file
     */
    icon: string;
    /**
     * Expect a link to an SVG icon in order to the loader
     */
    spinner: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "w-button": WButton;
    }
}
export declare const Button: import("@lit/react").ReactWebComponent<WButton, {}>;
export {};
