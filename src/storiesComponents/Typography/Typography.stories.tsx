import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  Typography,
  TypographyProps,
} from "../../components/Typography/Typography";
import StoryLayout from "../StoryLayout";

const meta: Meta = {
  title: "Typography",
  // component: Typography,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

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

interface Props extends TypographyProps {
  darkMode: boolean;
  fontWeight?: TypographyWeightOption[];
  variantSize: TypographyVariant[];
}

const TypographyDynamic: Story<Props> = (args) => {
  const isHeading = args.variant.startsWith("h");

  return (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args}>
        {isHeading ? "Display" : "Text"} {args.variant} <br />{" "}
        {args.customWeight}
      </Typography>
    </StoryLayout>
  );
};

const TypographyHeadings: Story<Props> = (args) => {
  return (
    <div className="flex flex-col gap-12">
      <h3>Font Family: Inter</h3>
      <div className="flex justify-between gap-12 border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Heading 1 | 2xl
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 72px / 4.5rem | Line height: 90px / 5.625rem | Tracking:
          -2%
        </Typography>
      </div>
      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[0]}
              customWeight={font}
            >
              Display {args.variantSize[0]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[0]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>

      <div className="flex justify-between border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Heading 2 | xl
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 60px / 3.75rem | Line height: 72px / 4.625rem | Tracking:
          -2%
        </Typography>
      </div>
      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[1]}
              customWeight={font}
            >
              Display {args.variantSize[1]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[1]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>

      <div className="flex justify-between border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Heading 3 | lg
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 48px / 3rem | Line height: 60px / 3.75rem | Tracking: -2%
        </Typography>
      </div>

      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[2]}
              customWeight={font}
            >
              Display {args.variantSize[2]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[2]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>

      <div className="flex justify-between border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Heading 4 | md
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 36px / 2.25rem | Line height: 44px / 2.75rem | Tracking:
          -2%
        </Typography>
      </div>
      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[3]}
              customWeight={font}
            >
              Display {args.variantSize[3]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[3]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>

      <div className="flex justify-between border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Heading 5 | sm
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 30px / 1.875rem | Line height: 38px / 2.375rem
        </Typography>
      </div>

      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[4]}
              customWeight={font}
            >
              Display {args.variantSize[4]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[4]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>
      <div className="flex justify-between border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Heading 6 | xs
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 24px / 1.5rem | Line height: 32px / 2rem
        </Typography>
      </div>

      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[5]}
              customWeight={font}
            >
              Display {args.variantSize[5]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[5]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>
    </div>
  );
};

export const Heading = TypographyHeadings.bind({});
Heading.args = {
  className: "",
  darkMode: false,
  fontWeight: ["regular", "medium", "semibold", "bold"],
  variantSize: ["h1", "h2", "h3", "h4", "h5", "h6"],
};

Heading.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};

const TypographyText: Story<Props> = (args) => {
  return (
    <div className="flex flex-col gap-12">
      <h3>Font Family: Inter</h3>
      <div className="flex justify-between gap-12 border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Text xl
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 20px / 1.25rem | Line height: 30px / 1.875rem
        </Typography>
      </div>
      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[0]}
              customWeight={font}
            >
              Display {args.variantSize[0]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[0]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>

      <div className="flex justify-between border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Text lg
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 18px / 1.125rem | Line height: 28px / 1.75rem
        </Typography>
      </div>
      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[1]}
              customWeight={font}
            >
              Display {args.variantSize[1]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[1]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>

      <div className="flex justify-between border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Text md
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 16px / 1rem | Line height: 24px / 1.5rem
        </Typography>
      </div>

      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[2]}
              customWeight={font}
            >
              Display {args.variantSize[2]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[2]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>

      <div className="flex justify-between border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Text small
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 14px / 0.875rem | Line height: 20px / 1.25rem
        </Typography>
      </div>
      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[3]}
              customWeight={font}
            >
              Display {args.variantSize[3]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[3]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>

      <div className="flex justify-between border-b border-gray-300">
        <Typography variant="md" customColor={`text-gray-400`}>
          Text xs
        </Typography>

        <Typography variant="md" customColor={`text-gray-400`}>
          Font size: 12px / 0.75rem | Line height: 18px / 1.125rem
        </Typography>
      </div>

      <StoryLayout
        {...args}
        className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols4"
      >
        {args.fontWeight?.map((font) => (
          <div className="flex flex-col gap-8">
            <Typography
              {...args}
              variant={args.variantSize[4]}
              customWeight={font}
            >
              Display {args.variantSize[4]}
            </Typography>
            <Typography
              {...args}
              variant={args.variantSize[4]}
              customWeight={font}
            >
              {font}
            </Typography>
          </div>
        ))}
      </StoryLayout>
    </div>
  );
};

export const Text = TypographyText.bind({});

Text.args = {
  customWeight: "regular",
  className: "",
  darkMode: false,
  fontWeight: ["regular", "medium", "semibold", "bold"],
  variantSize: ["xl", "lg", "md", "sm", "xs"],
};

Text.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};

export const Dynamic = TypographyDynamic.bind({});

Dynamic.args = {
  variant: "h1",
  customColor: "", //text-primary-600 dark:text-white
  customWeight: "regular",
  className: "",
  darkMode: false,
};
