import React from 'react';
import StoryLayout from '../StoryLayout';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {colors, IColor} from './color';
import ColorItem from './ColorItem';


function chunkArray(array: IColor[], size: number) {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size)
    result.push(chunk)
  }
  return result
}

//split array in chunks
const result: IColor[][] = chunkArray(colors, 11);
let colorTypeMap = new Map<number, string>([
  [0, "gray"],
  [1, "primary"],
  [2, "error"],
  [3, "warning"],
  [4, "success"]
]);



export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Color',
  subTitle: 'Test',
  component: ColorItem,
} as ComponentMeta<typeof ColorItem>;



export const Default:  ComponentStory<typeof ColorItem> = (args) => (
  <div>
    {
      result.map((colorsArray, index )=> (
        <div> 
          <p className='mb-4'>{colorTypeMap.get(index)}</p>
          <StoryLayout
            darkMode={false}
            className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11"
          >
            {
              colorsArray.map((color) => (
                <ColorItem color={color}/>
              ))
            }
          </StoryLayout>
        </div>
      ))
    }
  </div>)


export const Test:  ComponentStory<typeof ColorItem> = (args) => (
  <StoryLayout
    darkMode={false}
    className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11"
  >
    {
      colors.map((color) => (
        <ColorItem color={color}/>
      ))
    }
  </StoryLayout>
);