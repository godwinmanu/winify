import { LitElement } from "lit";
declare class WButton extends LitElement {
    static styles: import("lit").CSSResult[];
    bgColor: string;
    color: string;
    variant: "outline" | "ghost" | "link" | "contain";
    size: "lg" | "md" | "sm";
    disabled: boolean;
    loading: boolean;
    icon?: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "w-button": WButton;
    }
}
export declare const Button: import("@lit/react").ReactWebComponent<WButton, {}>;
export {};
