import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Parse the request body
        console.log(body);

        // Check if the directory exists, if not, create it
        const dirPath = 'contactdata';
        try {
            await fs.access(dirPath);
        } catch (error) {
            await fs.mkdir(dirPath);
        }

        let data = await fs.readdir(dirPath);
        console.log(data);
        await fs.writeFile(`${dirPath}/${data.length + 1}.json`, JSON.stringify(body));
        return NextResponse.json(body);
    } catch (error) {
        // console.log(error.message);
        return NextResponse.json({ error: "Hello from Error" });
    }
}

export async function GET() {
    return NextResponse.json(["allInfoData"]);
}
