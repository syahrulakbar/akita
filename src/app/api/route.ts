import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log("first");
  const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
  await axios.get(`${API_SERVER}/api/users/admin`, {
    withCredentials: true,
    headers: {
      Cookie: req.headers.get("cookie"),
    },
  });
  return NextResponse.json(
    {
      success: true,
      messages: "List Data Products",
    },
    {
      status: 200,
    },
  );
}
