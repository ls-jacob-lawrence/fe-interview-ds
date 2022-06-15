import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Text',
    component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
    <Text {...args}>Information</Text>
);

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
    size: 'small',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
};

export const Bold = Template.bind({});
Bold.args = {
    bold: true,
};

export const AsSpan = Template.bind({});
AsSpan.args = {
    as: 'span',
};
