// types
import { ComponentStory, ComponentMeta } from "@storybook/react";
// components
import { BrowserRouter } from "react-router-dom";
// component
import UserNavCarousell from "./UserNavCarousell";

const componentInfo = {
    title: "Design System/organism/User navigate bar",
    component: UserNavCarousell,
} as ComponentMeta<typeof UserNavCarousell>;

export default componentInfo;

const Template: ComponentStory<typeof UserNavCarousell> = (args) =>
    <BrowserRouter>
        <UserNavCarousell {...args} />
    </BrowserRouter>;

export const UserNavCarousellExample = Template.bind({})