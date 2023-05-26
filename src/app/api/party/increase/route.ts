import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    console.log('increase')

    return NextResponse.json('decrease');
}