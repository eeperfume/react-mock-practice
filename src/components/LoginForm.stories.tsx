import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Components/LoginForm",
  component: LoginForm,
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const 기본: Story = {
  render: () => <LoginForm />,
};
