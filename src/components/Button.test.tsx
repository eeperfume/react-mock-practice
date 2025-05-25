import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("라벨이 제대로 렌더링되는가", () => {
    render(<Button label="클릭" />);
    expect(screen.getByText("클릭")).toBeInTheDocument();
  });

  test("onClick 핸들러가 호출되는가", () => {
    const handleClick = jest.fn();
    render(<Button label="눌러" onClick={handleClick} />);

    fireEvent.click(screen.getByText("눌러"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
