import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Button = ({
       text,
       px = "px-5",       // default horizontal padding
       py = "py-3",        // default vertical padding
       Arrow = true,       // show/hide arrow
       bg = "bg-white",    // background color
       textColor = "text-black", // text color
       textSize = "text-[12px]", // font size (renamed from textt for clarity)
       rounded = "rounded-full", // border radius (customizable)
       font = "font-semibold",   // font weight
}) => {
       return (
              <button
                     className={`
        flex items-center justify-center gap-2
        capitalize cursor-pointer hover:scale-105
        transition-transform duration-200
        ${bg} ${textColor} ${textSize} ${font} ${rounded} ${px} ${py}
      `}
              >
                     <span>{text}</span>
                     {Arrow && <MdOutlineArrowOutward size={16} />}
              </button>
       );
};

export default Button;
