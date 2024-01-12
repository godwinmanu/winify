import { LitElement } from "lit";
import "external-svg-loader";
declare class WInput extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Set the size of the Input on screens
     */
    size: "small" | "medium" | "large";
    /**
     * When set to true, disable the Input and make it not not mutable, focusable
     */
    disabled: boolean;
    /**
     * Set an icon as the Input ornament. Expect a text icon like emoji (😋) or a valid link to an SVG file
     */
    icon: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "w-input": WInput;
    }
}
export declare const Input: import("@lit/react").ReactWebComponent<WInput, {}>;
export {};
