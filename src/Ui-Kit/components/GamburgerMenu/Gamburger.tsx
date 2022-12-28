import React, { FC, useState, useEffect } from 'react'
import "./Gamburger.css";


export const Gamburger: FC = ({...props}) => {

  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('menu', `${toggle}`);
  }, [toggle])

  const log = (event: React.MouseEvent<HTMLDivElement>) => {
    setToggle(!toggle);
    console.log('event')
  }

  return (
    <div className={`${toggle ? 'menu__btn menu__btn-active' : 'menu__btn'}`} onClick = {log} {...props}>
      <span></span>
    </div>
  )
}
