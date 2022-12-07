import { ComponentMeta,ComponentStory } from '@storybook/react';

import LoginButton from '.';

export default {
  title: 'Comminition/UI/Buttons/Login Button',
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = () => <LoginButton />;

export const Primary = Template.bind({});
