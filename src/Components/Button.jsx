import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Button = ({
       text,
       px = "px-5",
       py = "py-3",
       Arrow = true,
       bg = "bg-white",
       textColor = "text-black" // optional, so color can change with bg
}) => {
       return (
              <button
                     className={`flex capitalize cursor-pointer hover:scale-105 items-center ${bg} ${textColor} font-semibold lg:py-4 lg:px-7 rounded-full font-[font-4] spacing-two transition ${px} ${py}`}
              >
                     <span>{text}</span>
                     {Arrow && <MdOutlineArrowOutward size={20} />}
              </button>
       );
};

export default Button;
