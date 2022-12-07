import { ComponentMeta,ComponentStory } from '@storybook/react';

import RoundButton from '.';

export default {
  title: 'Comminition/UI/Buttons/Round Button',
  component: RoundButton,
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => <RoundButton {...args} />;

export const Large = Template.bind({});

Large.args = {
  backgroundColor: 'white',
  size: 'large',
};

export const Medium = Template.bind({});

Medium.args = {
  backgroundColor: 'white',
  size: 'medium',
};

export const Auto = Template.bind({});

Auto.args = {
  backgroundColor: 'white',
  size: 'auto',
};

export const Pair = Template.bind({});
