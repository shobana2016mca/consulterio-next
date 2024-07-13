import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    return Response.json({ message: 'Hello World' });
  } catch (error) {
    console.error(error);

    return Response.json({ error: error }, { status: 500 });
  }
}
