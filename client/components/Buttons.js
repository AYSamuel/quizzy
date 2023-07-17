import React from 'react';

function Buttons({ title, bgColor, textColor, hoverEfx }) {
  return (
    <button className={`rounded-lg border border-grey p-3 text-xs mdl:text-base ${bgColor} ${textColor} ${hoverEfx}`}>
      {title}
    </button>
  );
}

export default Buttons;
