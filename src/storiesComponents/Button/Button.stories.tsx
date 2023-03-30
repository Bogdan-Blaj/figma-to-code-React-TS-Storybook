import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { Button, ButtonProps } from "../../components/Button/Button";
import StoryLayout from "../StoryLayout";

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props extends ButtonProps {
  darkMode: boolean;
}

const StoryButton: Story<Props> = (args) => (
  <StoryLayout {...args} className="flex flex-col flex-grow gap-4">
    <Button {...args} className="self-start">
      Button CTA
    </Button>

    <Button {...args} LeadingIcon={<FiStar />} className="self-start">
      Button CTA
    </Button>

    <Button {...args} TrailingIcon={<FiArrowRight />} className="self-start">
      Button CTA
    </Button>

    <Button {...args} IconOnly={<FiArrowRight />} />
  </StoryLayout>
);

export const Default = StoryButton.bind({});

Default.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
  disabled: false,
};

Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "IconOnly"] },
};
