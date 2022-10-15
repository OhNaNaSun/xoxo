// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const localRedirct = {
    '/api/ytvideos': '/mock/ytvideos.json',
    // '/api/igmedias': '/mock/igmedias.json',
  };
  const pathName = new URL(request.url).pathname;
  if (process.env.NODE_ENV === 'development' && Object.keys(localRedirct).includes(pathName)) {
    const mockPath = localRedirct[new URL(request.url).pathname];
    return NextResponse.redirect(new URL(mockPath as string, request.url));
  } else {
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
};
