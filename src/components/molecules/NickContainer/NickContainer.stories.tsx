import React from "react";
// types
import { ComponentStory, ComponentMeta } from "@storybook/react";
// component
import NickContainer from "./NickContainer";

const componentInfo = {
    title: "Design System/molecules/Nick Container",
    component: NickContainer,
} as ComponentMeta<typeof NickContainer>;

export default componentInfo;

const Template: ComponentStory<typeof NickContainer> = (args) => <NickContainer {...args} />;

export const NickContainerExample = Template.bind({});

NickContainerExample.args = {
    avatar: "https://avatars.githubusercontent.com/u/91225705?v=4",
    fullName: 'Luis Molina',
    nickName: 'luisMm24'
};