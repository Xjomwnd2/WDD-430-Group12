// /app/api/orders/route.ts
import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const buyer_id = searchParams.get("buyer_id");

  if (!buyer_id) {
    return NextResponse.json(
      { error: "buyer_id is required" },
      { status: 400 }
    );
  }

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM orders WHERE buyer_id = $1",
      [buyer_id]
    );
    client.release();

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
