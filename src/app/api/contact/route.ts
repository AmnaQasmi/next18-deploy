import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Parse the request body
        console.log(body);
        let data = await fs.promises.readdir('contactdata');
        console.log(data);
        await fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(body));
        return NextResponse.json(body);
    } catch (error) {
        console.log((error as { message: string }).message);
        return NextResponse.json({ error: "Hello from Error" });
    }
}

export async function GET() {
    return NextResponse.json(["allInfoData"]);
}

export default async function handler(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') {
        return POST(req);
    } else {
        return GET();
    }
}
