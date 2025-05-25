import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./Toggle";

describe("Toggle 컴포넌트", () => {
  test("초기 상태에서 체크되지 않아야 함", () => {
    render(<Toggle label="다크모드" />);
    const checkbox = screen.getByLabelText("다크모드") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  test("체크박스를 클릭하면 상태가 바뀌고 onChange가 호출되어야 함", () => {
    const handleChange = jest.fn();
    render(<Toggle label="다크모드" onChange={handleChange} />);
    const checkbox = screen.getByLabelText("다크모드");

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true);
    expect((checkbox as HTMLInputElement).checked).toBe(true);
  });
});
