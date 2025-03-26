import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

await connectToDatabase();

export async function GET() {
  try {
    const res = await client.query("SELECT * FROM users");
    return NextResponse.json(res.rows);
  } catch (error) {
    console.error("Error retrieving users:", error);
    return NextResponse.json(
      { message: "Error retrieving users" },
      { status: 500 }
    );
  }
}
