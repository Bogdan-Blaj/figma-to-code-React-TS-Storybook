import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { FiAlertCircle, FiHelpCircle, FiMail } from "react-icons/fi";
import {
  TextInput,
  TextInputProps,
} from "../../components/TextInput/TextInput";
import StoryLayout from "../StoryLayout";

const meta: Meta = {
  title: "TextInput",
  component: TextInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props extends TextInputProps {
  darkMode: boolean;
}

const TextInputStory: Story<Props> = (args) => {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  args.value = text;
  return (
    <StoryLayout {...args} className="flex space-x-8">
      <div>
        <TextInput
          type="email"
          value={text}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="email"
          value={text}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          error="This is an error message."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
      <div>
        <TextInput
          type="text"
          value={text}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          helperText="This is a hint text to help the user."
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="text"
          value={text}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          error="This is an error message."
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = TextInputStory.bind({});

Default.args = {
  darkMode: false,
  disabled: false,
  value: "",
};

Default.parameters = {
  controls: {
    exclude: [
      "value",
      "type",
      "handleChange",
      "label",
      "leadingText",
      "placeholder",
      "error",
      "helperText",
      "LeadingIcon",
      "TrailingIcon",
    ],
  },
};
