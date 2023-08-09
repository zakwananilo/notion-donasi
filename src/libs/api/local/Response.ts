import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server"

export class Response {
  static success(data?: object | object[], cookie?: string | string[]): NextResponse<LocalApiResponse> {
    const headers: HeadersInit = {};

    if (cookie && Array.isArray(cookie)) {
      for (const cookieItem of cookie) {
        headers['Set-Cookie'] = cookieItem;
      }
    }

    if (cookie && !Array.isArray(cookie)) {
      headers['Set-Cookie'] = cookie;
    }

    const config = { 
      headers
    };

    return NextResponse.json({ success: true, data }, config);
  }

  static image(stream: BodyInit, cookie?: string | string[]): NextResponse<LocalApiResponse> {
    const headers: HeadersInit = {
      'Content-Type': 'image/png'
    };

    if (cookie && Array.isArray(cookie)) {
      for (const cookieItem of cookie) {
        headers['Set-Cookie'] = cookieItem;
      }
    }

    if (cookie && !Array.isArray(cookie)) {
      headers['Set-Cookie'] = cookie;
    }

    const config = { 
      headers
    };

    return new NextResponse(stream, config);
  }

  static failed(message: string): NextResponse<LocalApiResponse> {
    return NextResponse.json({ success: false, message })
  }

  static redirect(url: string | NextURL | URL, cookie?: string | string[]) {
    const headers: HeadersInit = {};

    if (cookie && Array.isArray(cookie)) {
      for (const cookieItem of cookie) {
        headers['Set-Cookie'] = cookieItem;
      }
    }

    if (cookie && !Array.isArray(cookie)) {
      headers['Set-Cookie'] = cookie;
    }

    const config = { 
      status: 302,
      headers
    };

    return NextResponse.redirect(url, config);
  }
}