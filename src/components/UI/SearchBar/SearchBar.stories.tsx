import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from '.';

export default {
  title: 'Comminition/Search Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: '검색어를 입력하세요',
};
