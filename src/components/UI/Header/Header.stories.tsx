import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '.';

export default {
  title: 'Comminition/UI/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (_) => <Header />;

export const Primary = Template.bind({});
