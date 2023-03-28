import { Meta, Story } from "@storybook/react";
import React from "react";
import { Badge, BadgeProps } from "../../components/Badge/Badge";
import StoryLayout from "../StoryLayout";
import { FiStar, FiArrowRight } from "react-icons/fi";
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
