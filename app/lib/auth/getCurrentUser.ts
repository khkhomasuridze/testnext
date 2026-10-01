import { cookies } from "next/headers";
import { cache } from "react";
import { verifyJwt } from "./jwt";

export const getCurrentUser = cache(async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
        return null;
    }

    const payload = await verifyJwt(token);

    if (!payload) {
        // Signature was invalid, modified, or token expired
        return null;
    }

    return payload;
});
