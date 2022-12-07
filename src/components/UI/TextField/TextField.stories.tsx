import { ComponentMeta,ComponentStory } from '@storybook/react';

import TextField from '.';

export default {
  title: 'Comminition/Text Field',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
