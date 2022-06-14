// types
import { ComponentMeta, Story } from "@storybook/react";
// component
import InputText, { Props } from "./InputText";
import { useState } from "@storybook/addons";
import React from "react";

const componentInfo = {
    title: "Design System/atoms/Input text",
    component: InputText,
} as ComponentMeta<typeof InputText>;

export default componentInfo;

const Template: Story<Props> = (args) => {
    const [inputValue, setInputValue] = useState<string>('');
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    return <InputText
        placeholder="Input example"
        value={inputValue}
        handleChange={onChangeInput}
    />
}
export const InputTextExample: Story<Props> = Template.bind({});
