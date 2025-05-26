import React from "react";

import "./button.css";

export interface ButtonProps {
  /** 이 버튼이 페이지에서 주요 액션(Primary) 버튼인가요? */
  primary?: boolean;
  /** 사용할 배경 색상 */
  backgroundColor?: string;
  /** 버튼의 크기 */
  size?: "small" | "medium" | "large";
  /** 버튼에 표시할 내용(텍스트) */
  label: string;
  /** (선택) 버튼 클릭 핸들러 */
  onClick?: () => void;
}

/** 사용자 인터랙션을 위한 기본 UI 컴포넌트 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
