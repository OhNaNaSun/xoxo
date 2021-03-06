import Tooltip from '../components/tooltip/Tooltip';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tooltip',
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Top = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Top.args = {
  position: 'top',
  title: 'Tooltip on top',
};
export const Left = Template.bind({});
Left.args = {
  position: 'left',
  title: 'Tooltip on left',
};
