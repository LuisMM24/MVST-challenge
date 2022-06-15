// types
import { ComponentMeta, ComponentStory } from "@storybook/react";
// router
import { MemoryRouter } from "react-router-dom";
// context provider
import UserProfileProvider from "../../../context/UserProfileContext";
// component
import UserRepositories from "./UserRepositories";

const componentInfo = {
    title: "Design System/organism/User Repositories",
    component: UserRepositories,
} as ComponentMeta<typeof UserRepositories>;

export default componentInfo;

const Template: ComponentStory<typeof UserRepositories> = (args) => {
    return (
        <MemoryRouter>
            <UserProfileProvider>
                <UserRepositories {...args} />
            </UserProfileProvider>
        </MemoryRouter>

    );
}


export const UserRepositoriesExample = Template.bind({});