import classNames from "classnames";
import React from "react";

type BadgeVariant = "gray" | "primary" | "error" | "warning" | "success";
type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  variant: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: string | React.ReactElement;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
}

const BadgeVariantClasses: Record<BadgeVariant, string> = {
  gray: "badge-gray",
  primary: "badge-primary",
  error: "badge-error",
  warning: "badge-warning",
  success: "badge-success",
};

const BadgeSizeClasses: Record<BadgeSize, string> = {
  lg: "badge-lg",
  md: "badge-md",
  sm: "badge-sm",
};
export const Badge = ({
  variant,
  size = "md",
  className,
  LeadingIcon,
  TrailingIcon,
  children,
}: BadgeProps) => {
  const badgeVarianClassName = BadgeVariantClasses[variant];
  const badgeSizeClassName = BadgeSizeClasses[size];
  return (
    <div
      className={classNames(
        "badge-base",
        badgeVarianClassName,
        badgeSizeClassName,
        className
      )}
    >
      {LeadingIcon ? (
        <LeadingIcon.type
          {...LeadingIcon.props}
          className={classNames("mr-1.5", LeadingIcon.props.className)}
        />
      ) : null}
      {children}
      {TrailingIcon ? (
        <TrailingIcon.type
          {...TrailingIcon.props}
          className={classNames("ml-1.5", TrailingIcon.props.className)}
        />
      ) : null}
    </div>
  );
};
