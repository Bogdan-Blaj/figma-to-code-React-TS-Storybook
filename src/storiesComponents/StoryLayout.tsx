import React from 'react';
import classNames from 'classnames';
import "../index.css";
import "../App.css";

interface IStoryArgs {
    darkMode: boolean;
    className ?: string;
    children ?: React.ReactNode;
    noPadding ?: boolean;
}

const StoryLayout = (args: IStoryArgs) => {
  return ( //if dark mode enabled => change background color
    <div className={classNames({ "dark bg-gray-900": args.darkMode}, "-m-4")}>
        <div className={classNames(args.className, {"p-4": !args.noPadding})}>
            {args.children}
        </div>
    </div>
  )
}

export default StoryLayout;
