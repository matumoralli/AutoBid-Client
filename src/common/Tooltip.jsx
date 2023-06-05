import { useState } from "react";

const Tooltip = ({ text, view = true, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);

  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div
      className="relative inline-block w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && view && (
        <div className="absolute left-1/2 top-12 -translate-x-1/2 rounded-md bg-zinc-800 bg-opacity-90 p-2 text-xs text-white">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
