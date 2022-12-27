import React, { FC, useState, useEffect } from 'react';
import sun from '../../../assets/sun.svg';
import moon from '../../../assets/moon.svg';
import './Checker.css';

interface CheckerProps {
  label: string;
}


export const Checker = ({
  label,
}: CheckerProps) => {

  const [toggle, setToggle] = useState<boolean>(false);
  
  const toggleClass = (event: React.MouseEvent<HTMLDivElement>) => {
    setToggle(!toggle);
  }

  return (
    <div className={`${toggle ? 'btn__container btn__container__active' : 'btn__container'}`} onClick={toggleClass}>
      <button className="btn__checker">
        <img src={sun} alt="sun" className="btn__icon" />
        <img src={moon} alt="moon" className="btn__icon" />
    </button>
    </div>
  );
};
