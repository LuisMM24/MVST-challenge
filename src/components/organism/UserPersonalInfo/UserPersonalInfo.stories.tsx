// types
import { ComponentStory, ComponentMeta } from "@storybook/react";
// component
import UserPersonalInfo from "./UserPersonalInfo";

const componentInfo = {
    title: "Design System/organism/User personal information",
    component: UserPersonalInfo,
} as ComponentMeta<typeof UserPersonalInfo>;

export default componentInfo;

const Template: ComponentStory<typeof UserPersonalInfo> = (args) => <UserPersonalInfo {...args} />;

export const UserPersonalInfoExample = Template.bind({});