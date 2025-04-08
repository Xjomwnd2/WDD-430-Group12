/* eslint-disable padded-blocks */
import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const email = decodeURIComponent(params.id);

  if (!email) {
    return NextResponse.json({ error: "email not found" }, { status: 400 });
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
