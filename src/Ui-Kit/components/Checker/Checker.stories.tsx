import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checker } from './Checker';


export default {
  title: 'Ui-Kit/Checker',
  component: Checker,

  argTypes: {},
} as ComponentMeta<typeof Checker>;


const Template: ComponentStory<typeof Checker> = (args) => <Checker {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Checker',
};