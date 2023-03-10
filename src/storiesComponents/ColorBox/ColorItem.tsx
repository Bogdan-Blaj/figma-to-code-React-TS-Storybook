import React from 'react'
import { IColor } from './color';

export const ColorItem = ({color} : {color: IColor}) => {
  return (
    <div className='flex flex-col rounded-lg shadow-lg w-26'>
        <div className={`h-20 ${color.bgClass} rounded-t-lg flex items-center`} >
        </div>
        <div className={"py-3 px-3"}>
          {
            //ToDo: use typograpgy
          }
            <p className="text-lg">{color.code}</p> 
            <p className="text-gray-500">{color.hex}</p>
        </div>
    </div>
  )
}

export default ColorItem;
