// types
import { ComponentMeta, ComponentStory } from "@storybook/react";
// router
import { MemoryRouter } from "react-router-dom";
// context provider
import UserProfileProvider from "../../context/UserProfileContext";
// component
import UserProfile from "./UserProfile";

const componentInfo = {
    title: "Design System/page/User Profile",
    component: UserProfile,
} as ComponentMeta<typeof UserProfile>;

export default componentInfo;

const Template: ComponentStory<typeof UserProfile> = (args) => {
    return (
        <MemoryRouter>
            <UserProfileProvider>
                <UserProfile {...args} />
            </UserProfileProvider>
        </MemoryRouter>

    );
}


export const UserProfileExample = Template.bind({});