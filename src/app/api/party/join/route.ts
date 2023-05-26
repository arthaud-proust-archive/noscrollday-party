import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    // will be usefully later
    const party = request.nextUrl.searchParams.get("party");
    const client = request.nextUrl.searchParams.get("client");

    console.log('joined')

    return NextResponse.json('joined');
}