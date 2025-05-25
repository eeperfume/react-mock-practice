import { useState } from "react";

type Props = {
  login: (username: string, password: string) => Promise<boolean>;
};

export default function LoginForm({ login }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await login(username, password);
      setSuccess(result);
      if (!result) setError("로그인 실패");
    } catch {
      setError("오류 발생");
    } finally {
      setLoading(false);
    }
  };

  if (success) return <p>환영합니다!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        비밀번호
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "로그인 중..." : "로그인"}
      </button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
