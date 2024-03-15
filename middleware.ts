import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const key = request.cookies.get('key')

  if (!key) {
    // return NextResponse.redirect(new URL('asd', request.url))
  }
}
