import { render, screen, fireEvent } from "@testing-library/react";
import { RestoreDialog } from "./RestoreDialog";

describe("RestoreDialog", () => {
  it("확인 버튼 클릭 시 alert가 뜬다", () => {
    // window.alert를 mock 처리
    window.alert = jest.fn();

    render(<RestoreDialog onConfirm={() => alert("복구 진행!")} />);

    const confirmButton = screen.getByRole("button", { name: "확인" });

    // 버튼 클릭
    fireEvent.click(confirmButton);

    // alert가 호출됐는지 체크
    expect(window.alert).toHaveBeenCalledWith("복구 진행!");
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
});
