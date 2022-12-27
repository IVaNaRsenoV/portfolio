import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UiButton } from './UiButton';


export default {
  title: 'Ui-Kit/Button',
  component: UiButton,

  argTypes: {},
} as ComponentMeta<typeof UiButton>;


const Template: ComponentStory<typeof UiButton> = (args) => <UiButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Download CV',
};