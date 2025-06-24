import React from 'react'
import Tooltip from '@mui/material/Tooltip';

function TechStacksItem({ imgurl, name, tooltipClassName, arrowClassName, boxClassName }) {
  return (
    <Tooltip 
      title={name}
      arrow
      classes={{
        tooltip: tooltipClassName,
        arrow: arrowClassName
      }}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8], // [x, y] 이동: 위로 10px
              },
            },
          ],
        },
      }}
    >
      <div className={boxClassName}>
        <p>
          <img src={`/imgs/tech-${imgurl}`} alt="stack" />
        </p>
      </div>
    </Tooltip>
  )
}

export default TechStacksItem