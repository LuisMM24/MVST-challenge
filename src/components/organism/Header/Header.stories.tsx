// types
import { ComponentStory, ComponentMeta } from "@storybook/react";
// component
import Header from "./Header";

const componentInfo = {
    title: "Design System/organism/Header",
    component: Header,
} as ComponentMeta<typeof Header>;

export default componentInfo;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderExample = Template.bind({});