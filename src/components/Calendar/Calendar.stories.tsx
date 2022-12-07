import { ComponentMeta,ComponentStory } from '@storybook/react';

import Calendar from '.';

export default {
  title: 'Comminition/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = () => <Calendar />;

export const Primary = Template.bind({});

Primary.args = {
  username: 'BHyeonKim',
};
