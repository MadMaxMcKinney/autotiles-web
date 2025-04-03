import codes from "@/data/obd2.json";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams;
    const code = query.get("code");

    if (!code) {
        return NextResponse.json({ error: "OBD2 code not provided" }, { status: 400 });
    }
    const codeData = codes.find((item) => item.id.toLowerCase() === code.toLowerCase());

    if (!codeData) {
        return NextResponse.json({ error: "OBD2 code not found in database" }, { status: 404 });
    }

    return NextResponse.json(codeData, { status: 200 });
}
