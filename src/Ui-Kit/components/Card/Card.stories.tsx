import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";
import logo from '../../../assets/projects/01.jpg';

export default {
    title: "Ui-Kit/Card",
    component: Card,

    argTypes: {}
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: "Gaming streaming portal",
    img: logo
}