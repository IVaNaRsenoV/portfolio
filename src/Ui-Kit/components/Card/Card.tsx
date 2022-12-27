import React, { FC } from 'react';
import './Card.css';

export interface CardProps {
    label: string;
    img: HTMLImageElement;
}

export const Card: FC<CardProps> = ({ label, img }) => {
  return (
    <li className="project" style={{ listStyle: 'none' }}>
        <a href="#" style={{ textDecoration: "none" }}>
            <img src={`${img}`} style={{ width: "100%" }} alt="card"/>
            <h3 className="project__title" style={{ 
              padding: "15px 20px 25px",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "1.3",
              color: "#171718",
              textAlign: "center"
             }}
             >
              {label}
            </h3>
        </a>
    </li>
  )
}
