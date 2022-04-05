import React from 'react';

export default function Hero({children, hero}) {
  return (
    <div className="background">
      <div className={hero}>{children}</div>
    </div>
  )
}

Hero.defaultProps={
  hero:"hero"
}
