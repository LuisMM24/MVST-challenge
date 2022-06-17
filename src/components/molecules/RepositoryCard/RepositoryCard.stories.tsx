// types
import { ComponentStory, ComponentMeta } from "@storybook/react";

// component
import RepositoryCard from "./RepositoryCard";

const componentInfo = {
  title: "Design System/molecules/Repository card",
  component: RepositoryCard,
} as ComponentMeta<typeof RepositoryCard>;

export default componentInfo;

const Template: ComponentStory<typeof RepositoryCard> = (args) => (
  <RepositoryCard {...args} />
);

export const RepositoryCardExample = Template.bind({});

RepositoryCardExample.args = {
  isPrivateRepo: true,
  language: "Javascript",
  name: "MVC",
  updateAt: "2021-12-13T08:32:29Z",
};
