import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(request: NextRequest) {
  const status = request.nextUrl.searchParams.get("status") || 200;

  if (Number(status) === 401) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const message: ResponseData = { message: "test" };
  return NextResponse.json({ ...message });
}
