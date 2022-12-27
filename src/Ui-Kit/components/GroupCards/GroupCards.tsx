import React, { FC } from "react";
import { Card } from "../Card";
import logo from '../../../assets/projects/01.jpg';
import "./GroupCards.css";

export const GroupCards: FC = () => {
    return (
        <ul className="projects">
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
            <Card label={"XXX"} img={logo} />
        </ul>
    )
}