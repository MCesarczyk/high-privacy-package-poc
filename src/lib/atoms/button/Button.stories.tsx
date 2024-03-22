import { ComponentProps } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '.';

const meta = {
  title: 'Atoms/button',
  component: Button,
  argTypes: {},
  args: {
    onClick: action('clicked'),
  },
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Button>> = () => <Button />;

export const _Button = Template.bind({});
