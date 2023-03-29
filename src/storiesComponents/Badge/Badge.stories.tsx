import { Meta, Story } from "@storybook/react";
import React from "react";
import { Badge, BadgeProps } from "../../components/Badge/Badge";
import StoryLayout from "../StoryLayout";
import { FiStar, FiArrowRight, FiX } from "react-icons/fi";
import image from "../../Images/NL.svg";

const meta: Meta = {
  title: "Badge",
  component: Badge,
};

export default meta;

type BadgeVariant = "gray" | "primary" | "error" | "warning" | "success";
type BadgeSize = "sm" | "md" | "lg";

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
interface Props extends BadgeProps {
  darkMode: boolean;
  sizeArray?: BadgeSize[];
  variantArray?: BadgeVariant[];
  trailingIconArray?: React.ReactElement[];
  leadingIconArray?: React.ReactElement[];
}

const StoryBadge: Story<Props> = (args) => (
  <StoryLayout {...args} className="inline-flex flex-col space-y-2">
    <Badge {...args} LeadingIcon={<FiStar />}>
      Label
    </Badge>

    <Badge
      {...args}
      LeadingIcon={<img src={image} alt="nl" className="w-4 h-4" />}
    >
      Label
    </Badge>

    <Badge {...args} TrailingIcon={<FiArrowRight />}>
      Label
    </Badge>
  </StoryLayout>
);

export const Default = StoryBadge.bind({});

Default.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "className"] },
};

const StoryBadgeAll: Story<Props> = (args) => {
  return (
    <div className="flex flex-col">
      <StoryLayout {...args} className="grid grid-cols-1 gap-4 ">
        {args.variantArray?.map((varianColor, index) => (
          <div className="flex flex-row gap-12">
            <div className="flex flex-row gap-4">
              {
                // badge with no icon
                args.sizeArray?.map((size, index) => {
                  return (
                    <Badge size={size} variant={varianColor}>
                      Label
                    </Badge>
                  );
                })
              }
            </div>
            <div className="flex flex-row gap-4">
              {
                // badge with leading flag icon
                args.sizeArray?.map((size, index) => {
                  return (
                    <Badge
                      size={size}
                      variant={varianColor}
                      LeadingIcon={
                        <img src={image} alt="nl" className="w-4 h-4" />
                      }
                    >
                      Label
                    </Badge>
                  );
                })
              }
            </div>
            <div className="flex flex-row gap-4">
              {
                // badge with trailing X icon
                args.sizeArray?.map((size, index) => {
                  return (
                    <Badge
                      size={size}
                      variant={varianColor}
                      TrailingIcon={<FiX />}
                    >
                      Label
                    </Badge>
                  );
                })
              }
            </div>
            <div className="flex flex-row gap-4">
              {
                // badge with leading arrow icon
                args.sizeArray?.map((size, index) => {
                  return (
                    <Badge
                      size={size}
                      variant={varianColor}
                      TrailingIcon={<FiArrowRight />}
                    >
                      Label
                    </Badge>
                  );
                })
              }
            </div>
          </div>
        ))}
      </StoryLayout>
    </div>
  );
};
export const All = StoryBadgeAll.bind({});

All.args = {
  sizeArray: ["sm", "md", "lg"],
  variantArray: ["gray", "primary", "success", "error", "warning"],
};
