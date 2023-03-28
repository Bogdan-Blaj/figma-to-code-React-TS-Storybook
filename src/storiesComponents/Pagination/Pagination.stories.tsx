import React, { useState } from "react";
import StoryLayout from "../StoryLayout";
import { ComponentStory, ComponentMeta, Story, Meta } from "@storybook/react";
import { Pagination } from "../../components/Pagination/Pagination";

const meta: Meta = {
  title: "Pagination",
};

export default meta;

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  isMobile: boolean;
  totalPage: number;
}

interface Props extends PaginationProps {
  darkMode: boolean;
}

const PaginationStory: Story<Props> = (args) => {
  const [page, setPage] = useState(1);
  const totalPage = 10;

  return (
    <StoryLayout {...args} className="">
      <Pagination
        isMobile={args.isMobile}
        setPage={setPage}
        page={page}
        totalPage={totalPage}
      />
    </StoryLayout>
  );
};

export const Default = PaginationStory.bind({});

Default.args = {
  darkMode: false,
  isMobile: false,
};
