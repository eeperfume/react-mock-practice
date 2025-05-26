import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

// 스토리북 기본 내보내기 설정에 대한 자세한 내용: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // (옵션) 컴포넌트를 Canvas 중앙에 배치하는 레이아웃 설정. 자세한 내용: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // 이 컴포넌트는 자동으로 Autodocs 항목이 생성됨: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // argTypes에 대한 자세한 설명: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // onClick 속성에 대해 fn을 사용해 호출 내역을 액션 패널에서 확인 가능: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// args를 활용해 스토리를 작성하는 방법에 대한 자세한 내용: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
