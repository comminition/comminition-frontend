import { ComponentMeta,ComponentStory } from '@storybook/react';

import RecruitItem from '.';

export default {
  title: 'Comminition/Recruit Item',
  component: RecruitItem,
} as ComponentMeta<typeof RecruitItem>;

const Template: ComponentStory<typeof RecruitItem> = (args) => <RecruitItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  author: '김보현',
  bookmark: 3,
  comments: 4,
  date: '2022-02-02',
  image:
    'https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
  isBookmarked: true,
  isLiked: true,
  like: 5,
  profileImage:
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043&q=80',
  title: '안녕하세요',
};
