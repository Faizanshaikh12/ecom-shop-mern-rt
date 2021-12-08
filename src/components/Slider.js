import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";

export const Slider = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-12 h-12 cursor-pointer opacity-5 bg-white rounded-full flex items-center justify-center absolute top-0 bottom-0 left-4 m-auto">
        <ArrowLeftOutlined />
      </div>
      <div className="h-full">
        <slide className="flex items-center w-screen h-screen">
          <image className="flex-1 h-full">
            <img
              className="w-10/12"
              src="https://www.cnet.com/a/img/WfkqAocgYhb8A85smYcTH_acFa8=/1200x630/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg"
            />
          </image>
          <info className="flex-1 p-12">
            <h1 className="text-7xl font-bold uppercase">Summer Sal</h1>
            <p className="my-12 font-medium text-xl tracking-wide uppercase">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </p>
            <button className='p-2 text-xl bg-transparent cursor-pointer' type='button'>Button</button>
          </info>
        </slide>
      </div>
      <div className="w-12 h-12 cursor-pointer opacity-5 bg-white rounded-full flex items-center justify-center absolute top-0 bottom-0 right-4 m-auto">
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
