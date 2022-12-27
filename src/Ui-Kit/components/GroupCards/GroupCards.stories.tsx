import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GroupCards } from './GroupCards';

export default {
    title: "Ui-Kit/GroupCards",
    component: GroupCards,

    argTypes: {}
} as ComponentMeta<typeof GroupCards>;

const Template: ComponentStory<typeof GroupCards> = (args) => <GroupCards {...args} />

export const Primary = Template.bind({});