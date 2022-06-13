// types
import { ComponentStory, ComponentMeta } from "@storybook/react";
// component
import PrimaryButton from "./PrimaryButton";

const componentInfo = {
    title: "Design System/atoms/PrimaryButton",
    component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

export default componentInfo;

const Template: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;

export const PrimaryButtonExample = Template.bind({});

PrimaryButtonExample.args = {
    children: "Test primary button",
    type: "button"
};