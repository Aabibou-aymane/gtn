import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('gtn-admin-session')?.value === 'true'
  const isAdminRoute = request.nextUrl.pathname === '/admin' || request.nextUrl.pathname.startsWith('/admin/')
  const isAuthRoute = request.nextUrl.pathname === '/auth'

  if (isAdminRoute && !session) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/auth'],
}
