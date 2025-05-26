import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Header } from "./Header";

const meta = {
  title: "Example/Header",
  component: Header,
  // 이 컴포넌트는 Autodocs 항목이 자동으로 생성됩니다: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // 스토리 위치(레이아웃) 지정에 대한 자세한 내용: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
