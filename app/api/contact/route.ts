import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  // TODO: forward securely; avoid storing sensitive info.
  console.log('Contact request', { name: data.name, email: data.email, phone: data.phone, time: data.time })
  return NextResponse.json({ ok: true })
}
