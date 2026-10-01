import { errors, jwtVerify } from "jose";

export interface MyTokenPayload {
  sub: string;
  email: string;
  role: string;
  exp: number;
  age: number
}

export async function verifyJwt(token: string): Promise<MyTokenPayload | null> {
  try {
    const secretKey = process.env.JWT_SECRET;

    if (!secretKey) {
      throw new Error('JWT_SECRET is not configured in environment variables.');
    }

    // 1. Convert secret string into a Uint8Array required by jose
    const secret = new TextEncoder().encode(secretKey);

    // 2. Verify signature, expiration (exp), and algorithm
    const { payload } = await jwtVerify<MyTokenPayload>(token, secret, {
      algorithms: ['HS256'], // Explicitly enforce symmetric HS256 algorithm,
    });

    return payload;
  } catch (error) {
    // Fails if signature is tampered with, expired, or invalid
    
    // but this line guarantess that we still get payload even jwt is expired - we want  this in case of /refresh is not performed inside proxy
    if(error instanceof errors.JWTExpired){
      return error.payload as unknown as MyTokenPayload;
    }
    
    // JWT verification failed:
    return null;
  }
}