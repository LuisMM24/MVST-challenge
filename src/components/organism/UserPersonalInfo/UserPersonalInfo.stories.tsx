// types
import { ComponentMeta, ComponentStory } from "@storybook/react";
// router
import { MemoryRouter } from "react-router-dom";
// context provider
import UserProfileProvider from "../../../context/UserProfileContext";
// component
import UserPersonalInfo from "./UserPersonalInfo";

const componentInfo = {
  title: "Design System/organism/User personal information",
  component: UserPersonalInfo,
} as ComponentMeta<typeof UserPersonalInfo>;

export default componentInfo;

const Template: ComponentStory<typeof UserPersonalInfo> = (args) => {
  return (
    <MemoryRouter>
      <UserProfileProvider>
        <UserPersonalInfo {...args} />
      </UserProfileProvider>
    </MemoryRouter>
  );
};

export const UserPersonalInfoExample = Template.bind({});
