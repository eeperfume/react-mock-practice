import axios from "axios";

const login = async (username: string, password: string): Promise<boolean> => {
  const res = await axios.post("/login", {
    username,
    password,
  });

  return res.data;
};

export { login };
