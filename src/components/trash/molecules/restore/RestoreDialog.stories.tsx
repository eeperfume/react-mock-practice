import type { Meta, StoryObj } from "@storybook/react";
import { RestoreDialog } from "./RestoreDialog";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof RestoreDialog> = {
  title: "Components/Trash/Molecules/RestoreDialog",
  component: RestoreDialog,
};
export default meta;

type Story = StoryObj<typeof RestoreDialog>;

export const Restore: Story = {
  args: {
    onConfirm: (...params) => {
      action("복구 확인 클릭됨")(...params);
      alert("복구 진행!");
    },
  },
  render: (args) => <RestoreDialog {...args} />,
};
