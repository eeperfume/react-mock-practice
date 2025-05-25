import { useState } from "react";

type ToggleProps = {
  label?: string;
  onChange?: (checked: boolean) => void;
};

export default function Toggle({ label = "토글", onChange }: ToggleProps) {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          onChange?.(!checked);
        }}
      />
      {label}
    </label>
  );
}
