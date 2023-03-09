import React from 'react';
import StoryLayout from '../StoryLayout';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {colors} from './color';
import ColorItem from './ColorItem';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Color',
  component: ColorItem,
} as ComponentMeta<typeof ColorItem>;



interface Props {
  darkMode: boolean;
}

export const Default:  ComponentStory<typeof ColorItem> = (args) => (
  <StoryLayout
    darkMode={false}
    className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11"
  >
    {
    // colors.map((color) => (
      <ColorItem color={colors[0]}/>
    // ))
    }
  </StoryLayout>
);

// export const Default = StoryColors.bind({});

// Default.args = {
//   darkMode: false,
// };







// export default {
//   title: 'Color',
//   component: ColorItem
// };


// export const Default = () => (

// { 
//   <ColorItem color={colors[0]}/>
// );
// }