// types
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserProfileProvider from "../../../context/UserProfileContext";
// component
import UserPersonalInfo from "./UserPersonalInfo";

const componentInfo = {
    title: "Design System/organism/User personal information",
    component: UserPersonalInfo,
} as ComponentMeta<typeof UserPersonalInfo>;

export default componentInfo;

const Template: ComponentStory<typeof UserPersonalInfo> = (args) => {
    return <UserProfileProvider>
        <UserPersonalInfo {...args} />
    </UserProfileProvider>;
}


export const UserPersonalInfoExample = Template.bind({});