import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from '.';

export default {
  title: 'Comminition/UI/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (_) => <Footer />;

export const Primary = Template.bind({});
