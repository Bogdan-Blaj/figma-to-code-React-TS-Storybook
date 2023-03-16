import React from "react";
import classNames from "classnames";

type TypographyVariant =
  // Text
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  // Display
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";

type TypographyWeightOption = "regular" | "medium" | "semibold" | "bold";

type TypographyWeightValue =
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold";

export interface TypographyProps {
  variant: TypographyVariant;
  customColor?: string;
  customWeight?: TypographyWeightOption;
  className?: string;
  children: string | React.ReactNode;
}

const TypographyVariantClasses: Record<TypographyVariant, string> = {
  //TailWind utility classes for adjusting font size
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  h6: "text-h6",
  h5: "text-h5",
  h4: "text-h4",
  h3: "text-h3",
  h2: "text-h2",
  h1: "text-h1",
};

const TypographyWeightClasses: Record<
  TypographyWeightOption,
  TypographyWeightValue
> = {
  //TailWind utility classes for adjusting font weight
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export function Typography({
  variant = "md",
  customColor,
  customWeight = "regular",
  className,
  children,
}: TypographyProps) {
  const TypographyVariantClassName = TypographyVariantClasses[variant];
  const TypographyWeightClassName = TypographyWeightClasses[customWeight];

  // h1-h6 should have corresponding component
  // others should be p
  const isHeading = variant.startsWith("h");
  const Component = (isHeading ? variant : "p") as keyof JSX.IntrinsicElements;
  console.log("customColor", customColor);
  return (
    <Component
      className={classNames(
        TypographyVariantClassName,
        TypographyWeightClassName,
        className,
        {
          ["tracking-tight"]: ["h1", "h2", "h3"].includes(variant),
          ["text-gray-900"]: !customColor,
        },
        customColor
      )}
    >
      {children}
    </Component>
  );
}
