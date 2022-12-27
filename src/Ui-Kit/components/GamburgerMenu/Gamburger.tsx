import React, { FC, useState, useEffect } from 'react'
import "./Gamburger.css";

interface GamburgerProps {
    label: 'Gamburger'
}

export const Gamburger: FC<GamburgerProps> = ({ label }) => {

  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    console.log(toggle);
  }, [toggle])

  const log = (event: React.MouseEvent<HTMLDivElement>) => {
    setToggle(!toggle);
    console.log('event')
  }

  return (
    <div className={`${toggle ? 'menu__btn menu__btn-active' : 'menu__btn'}`} onClick = {log}>
      <span></span>
    </div>
  )
}
