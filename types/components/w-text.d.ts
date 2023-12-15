import { LitElement } from "lit";
declare class WText extends LitElement {
    static styles: import("lit").CSSResult;
    name?: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "w-text": WText;
    }
}
export declare const Text: import("@lit/react").ReactWebComponent<WText, {}>;
export {};
