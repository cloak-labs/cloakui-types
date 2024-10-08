export type ComponentStyleProps<
  TStyle = Record<string, any>,
  TClassName = string
> = {
  style?: TStyle;
  className?: TClassName;
};

export type WithChildren<T, TChildren = any> = T & {
  children?: TChildren;
};

export type GenericParentComponent<
  TStyle = Record<string, any>,
  TChildren = any
> = WithChildren<ComponentStyleProps<TStyle>, TChildren>;

export type ContainerProps<
  TStyle = Record<string, any>,
  TChildren = any,
  TAs = string
> = GenericParentComponent<TStyle, TChildren> & {
  cntrClassName?: string;
  as?: TAs;
};

export type TTypographyProps<
  TStyle = Record<string, any>,
  TChildren = any
> = GenericParentComponent<TStyle, string | TChildren>;

export type TTypographyListProps<
  TStyle = Record<string, any>,
  TChildren = any
> = TTypographyProps<TStyle, TChildren> & {
  as: "ol" | "ul";
};

export type TTypographyListItemProps<
  TStyle = Record<string, any>,
  TChildren = any
> = TTypographyProps<TStyle, TChildren> & {
  content: string;
};

export type TTypographyBlockquoteProps<
  TStyle = Record<string, any>,
  TChildren = any
> = TTypographyProps<TStyle, TChildren> & {
  citation?: string;
  citationClassName?: string;
};

export type TImageProps<TStyle = Record<string, any>> = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  caption?: string;
  className?: string;
  style?: TStyle;
  cntrClassName?: string;
  cntrStyle?: TStyle;
  captionClassName?: string;
  noShadow?: boolean;
  sizes?: string;
  srcSet?: string;
};

export type THtmlProps<TStyle = Record<string, any>> =
  ComponentStyleProps<TStyle> & {
    content: string;
  };

export type TSeparatorProps<TStyle = Record<string, any>> =
  ComponentStyleProps<TStyle>;
