// Button.stories.js

import React from 'react';
import { Button } from 'antd';
import { action } from '@storybook/addon-actions';
// Meta information for the story
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} ;


// Template for different Button states
const Template = (args) => <Button {...args} onClick={action('Button clicked')}>{args.label}</Button>;

// Different variations of the Button
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'default',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
