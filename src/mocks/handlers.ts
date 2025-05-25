import { rest } from "msw";

export const handlers = [
  rest.post("/login", async (req, res, ctx) => {
    const { username, password } = await req.json();

    if (username === "wrong" && password === "fail") {
      return res(ctx.status(200), ctx.json(false));
    }

    if (username === "user" && password === "error") {
      return res(ctx.status(500));
    }

    return res(ctx.status(200), ctx.json(true));
  }),
];
