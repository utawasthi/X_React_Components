import { useState } from "react";

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "right" | "bottom" | "left";
};

function Tooltip({ children, content, position = "top" }: TooltipProps) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const positionClasses = {
    top :  "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom : "top-full left-1/2 -translate-x-1/2 mt-2",
    left : "right-full top-1/2 -translate-y-1/2 mr-2",
    right : "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const tooltipBg = "bg-white text-black";

  const arrow = {
    top: `top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white`,
    bottom: `bottom-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-b-white`,
    left: `left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-white`,
    right: `right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-white`,
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div
          className={`absolute ${positionClasses[position]} ${tooltipBg} text-sm px-2 py-2 rounded-lg shadow-md min-w-[140px] max-w-[350px]`}
        >
          <div className = 'flex justify-center items-center'>
            {content}
          </div>
          <div className={`absolute w-0 h-0 ${arrow[position]}`} />
        </div>
      )}
    </div>
  );
}

export default Tooltip;
