import { ComponentStory, ComponentMeta } from '@storybook/react';

import Calendar from '.';

export default {
  title: 'Comminition/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  username: 'BHyeonKim',
};