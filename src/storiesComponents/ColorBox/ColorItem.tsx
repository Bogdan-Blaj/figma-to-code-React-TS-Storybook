import React from 'react'
import { IColor } from './color';

export const ColorItem = ({color} : {color: IColor}) => {
  return (
    <div className='flex flex-col'>
        <div className={`h-4 ${color.bgClass}`} />
        <div className={`h-12 ${color.bgClass}`}>
            <p className="text-3xl">{color.code}</p>
            <p>{color.hex}</p>
        </div>
    </div>
  )
}

export default ColorItem;
