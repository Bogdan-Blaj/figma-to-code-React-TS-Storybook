import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import {
  ButtonGroup,
  ButtonGroupProps,
} from "../../components/ButtonGroup/ButtonGroup";
import StoryLayout from "../StoryLayout";
import { options1, options2 } from "./ButtonGroupMockData";
import { FiGrid, FiList } from "react-icons/fi";

const meta: Meta = {
  title: "ButtonGroup",
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props extends ButtonGroupProps<string> {
  darkMode: boolean;
}

const StoryButtonGroup: Story<Props> = (args) => {
  const [activeItem1, setActiveItem1] = useState(options1[1].value);

  const [activeItem2, setActiveItem2] = useState(options2[1].value);

  type ViewOption = "list" | "grid";
  const [viewOption, setViewOption] = useState("list");

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup
          {...args}
          active={activeItem1}
          setActive={() => setActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <ButtonGroup
          {...args}
          active={activeItem2}
          setActive={() => setActiveItem2}
          options={options2}
        />
      </div>
      <div>
        <ButtonGroup
          active={viewOption}
          options={[
            {
              content: <FiList size={20} />,
              value: "list",
            },
            {
              content: <FiGrid size={20} />,
              value: "grid",
            },
          ]}
          setActive={() => setViewOption}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryButtonGroup.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["active", "setActive", "options"] },
};
