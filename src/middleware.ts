import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

export async function middleware(request: NextRequest) {
  const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
  const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

  async function isAdmin() {
    try {
      const response = await axios.get(`${API_SERVER}/api/users/admin`, {
        headers: {
          Cookie: request.headers.get("cookie"),
        },
        withCredentials: true,
      });
      const { data } = response.data;
      return data;
    } catch (error) {
      console.error(error, "Error in isAdmin check");
      return false;
    }
  }

  if (isOnDashboard) {
    const isAuthorized = await isAdmin();
    if (!isAuthorized) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
