import React from 'react';

function Buttons({ title, color, textColor, hoverEfx, weight, active }) {
  return (
    <button
      className={`rounded-lg border border-grey px-3 py-2 text-xs mdl:text-base active:bg-primary ${color} ${textColor} ${hoverEfx} ${weight} ${active}`}>
      {title}
    </button>
  );
}

export default Buttons;
