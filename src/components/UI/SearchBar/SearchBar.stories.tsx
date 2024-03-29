import { ComponentMeta,ComponentStory } from '@storybook/react';

import SearchBar from '.';

export default {
  title: 'Comminition/Search Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
