'use server';

import login, { LoginResponse } from '@/app/features/login/api/login';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(email: string): Promise<{ success: boolean }> {

  const response: LoginResponse = await login(email);

  // Verify signature and expiration
  // const payload = await verifySymmetricJwt(response.accessToken);

  // if (!payload) {
  //   // Signature was invalid, modified, or token expired
  // }

  const cookieStore = await cookies();

  cookieStore.set("access_token", response.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // This controls whether the browser is allowed to send the cookie only over HTTPS.
    sameSite: "lax",
    path: "/",  // This determines which URL paths receive the cookie.
    maxAge: 60 * 15, // 15 minutes
  });

  redirect("/");
  // return { success: true };
}