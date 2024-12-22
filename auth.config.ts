import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    // 로그인, 로그아웃, 오류 페이지 경로 지정
    signIn: "/login",
  },
  callbacks: {
    //페이지에 액세스 권한이 요청되었는지 확인
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
