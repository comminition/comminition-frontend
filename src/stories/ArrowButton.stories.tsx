import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowButton from 'components/ArrowButton';

export default {
  title: 'ArrowButton',
  argTypes: {},
} as ComponentMeta<typeof ArrowButton>;

const Template: ComponentStory<typeof ArrowButton> = (args) => <ArrowButton {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'large',
};
