import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("성공적인 로그인 시 환영 메시지 출력", async () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText("아이디"), {
      target: { value: "user" },
    });
    fireEvent.change(screen.getByLabelText("비밀번호"), {
      target: { value: "pass" },
    });
    fireEvent.click(screen.getByRole("button", { name: "로그인" }));

    await waitFor(() => {
      expect(screen.getByText("환영합니다!")).toBeInTheDocument();
    });
  });

  test("로그인 실패 시 에러 메시지 출력", async () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText("아이디"), {
      target: { value: "wrong" },
    });
    fireEvent.change(screen.getByLabelText("비밀번호"), {
      target: { value: "fail" },
    });
    fireEvent.click(screen.getByRole("button", { name: "로그인" }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("로그인 실패");
    });
  });

  test("API 오류 발생 시 예외 메시지 출력", async () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText("아이디"), {
      target: { value: "user" },
    });
    fireEvent.change(screen.getByLabelText("비밀번호"), {
      target: { value: "error" },
    });
    fireEvent.click(screen.getByRole("button", { name: "로그인" }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("오류 발생");
    });
  });
});
