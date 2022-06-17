// types
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
// component
import Header from "./Header";

const componentInfo = {
  title: "Design System/organism/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export default componentInfo;

const Template: ComponentStory<typeof Header> = (args) => (
  <MemoryRouter>
    <Header {...args} />
  </MemoryRouter>
);

export const HeaderExample = Template.bind({});
