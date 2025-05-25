import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput 컴포넌트", () => {
  test("입력값이 반영되고 onChange가 호출됨", () => {
    const handleChange = jest.fn();
    render(<TextInput label="이름" value="" onChange={handleChange} />);

    const input = screen.getByLabelText("이름");
    fireEvent.change(input, { target: { value: "동근" } });

    expect(handleChange).toHaveBeenCalledWith("동근");
  });
});
