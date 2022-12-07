import { ComponentMeta,ComponentStory } from '@storybook/react';

import InfoItem from '.';

export default {
  title: 'Comminition/Info Item',
  component: InfoItem,
} as ComponentMeta<typeof InfoItem>;

const Template: ComponentStory<typeof InfoItem> = (args) => <InfoItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  bookmark: 3,
  comments: 4,
  content: '안녕하세요',
  date: '2020-02-11',
  isBookmarked: true,
  isLiked: false,
  like: 6,
  lineOfContent: 'oneLine',
  title: '안녕하세요',
  width: 'medium',
  writer: '김보현',
};
