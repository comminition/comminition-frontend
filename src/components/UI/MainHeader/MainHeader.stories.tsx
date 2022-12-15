import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainHeader from '.';

export default {
  title: 'Comminition/UI/Header',
  component: MainHeader,
} as ComponentMeta<typeof MainHeader>;

const Template: ComponentStory<typeof MainHeader> = (_) => <MainHeader />;

export const Primary = Template.bind({});
