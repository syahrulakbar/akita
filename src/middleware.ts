import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

export async function middleware(request: NextRequest) {
  const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  async function isAdmin() {
    try {
      await axios.get(`${API_URL}/api`, {
        withCredentials: true,
        headers: {
          Cookie: request.headers.get("cookie"),
        },
      });
      return true;
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
