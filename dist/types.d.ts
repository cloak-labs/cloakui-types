import { CX } from "cva";
type ClassValue = Parameters<CX>[0];
export type ComponentStyleProps<TStyle = Record<string, any>, TClassName = string> = {
    style?: TStyle;
    className?: TClassName;
};
export type WithChildren<T, TChildren = any> = T & {
    children?: TChildren;
};
export type GenericParentComponent<TStyle = Record<string, any>, TClassName = string, TChildren = any> = WithChildren<ComponentStyleProps<TStyle, TClassName>, TChildren>;
export type GenericParentComponentWithCx<TStyle = Record<string, any>, TChildren = any> = GenericParentComponent<TStyle, ClassValue, TChildren>;
export type ContainerProps<TStyle = Record<string, any>, TClassName = string, TChildren = any, TAs = string> = GenericParentComponent<TStyle, TClassName, TChildren> & {
    cntrClassName?: string;
    as?: TAs;
};
export type TTypographyProps<TStyle = Record<string, any>, TClassName = string, TChildren = any> = GenericParentComponent<TStyle, TClassName, TChildren>;
export type TTypographyListProps<TStyle = Record<string, any>, TClassName = ClassValue, TChildren = any> = TTypographyProps<TStyle, TClassName, TChildren> & {
    as: "ol" | "ul";
};
export type TTypographyListItemProps<TStyle = Record<string, any>, TClassName = ClassValue, TChildren = any> = TTypographyProps<TStyle, TClassName, TChildren> & {
    content: string;
};
export type TTypographyBlockquoteProps<TStyle = Record<string, any>, TClassName = ClassValue, TChildren = any> = TTypographyProps<TStyle, TClassName, TChildren> & {
    citation?: string;
    citationClassName?: string;
};
export type TImageProps<TStyle = Record<string, any>, TClassName = string> = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    caption?: string;
    className?: TClassName;
    style?: TStyle;
    cntrClassName?: ClassValue;
    cntrStyle?: TStyle;
    captionClassName?: string;
    noShadow?: boolean;
    sizes?: string;
    srcSet?: string;
};
export type THtmlProps<TStyle = Record<string, any>, TClassName = string> = ComponentStyleProps<TStyle, TClassName> & {
    content: string;
};
export type TSeparatorProps<TStyle = Record<string, any>, TClassName = ClassValue> = ComponentStyleProps<TStyle, TClassName>;
export {};
