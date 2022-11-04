import { ComponentStory, ComponentMeta } from '@storybook/react';

import Gnb from '.';

export default {
  title: 'Comminition/UI/Gnb',
  component: Gnb,
} as ComponentMeta<typeof Gnb>;

const Template: ComponentStory<typeof Gnb> = (args) => <Gnb {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  backgroundColor: 'blue',
};
