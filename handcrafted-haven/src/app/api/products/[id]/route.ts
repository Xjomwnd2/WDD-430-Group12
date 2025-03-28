import { NextResponse } from "next/server";
import { query } from "../../../../lib/db"; // Adjust this import to your actual database query function

// Handle GET request for product by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    // Query the database for the product by ID
    const result = await query("SELECT * FROM products WHERE product_id = $1", [
      id,
    ]);

    // If the product is found, return it as JSON
    if (result.rows.length > 0) {
      return NextResponse.json(result.rows[0]);
    } else {
      // If no product is found, return a 404 not found response
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
