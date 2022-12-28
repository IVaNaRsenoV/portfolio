import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Gamburger } from "./Gamburger";

export default {
    component: Gamburger,
    title: "Ui-Kit/Gamburger",

    argTypes: {
        onClick: { action: 'clicked' }
    }
} as ComponentMeta<typeof Gamburger>;

const Template: ComponentStory<typeof Gamburger> = (args) => <Gamburger {...args} />;

export const Primary = Template.bind({});