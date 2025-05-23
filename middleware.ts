import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));     
  } else{
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/profile/:path*',
};
