import { cartTableDrizzle, db } from "@/app/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    let allCartData = await db.select().from(cartTableDrizzle);
    console.log("data", allCartData);
    return NextResponse.json({ allCartData });
  } catch (error) {
    console.log("error:", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}

let dataToInsert = {
  product_id: "rafiali",
  quantity: 3,
  user_id: "rafiali810",
};

export async function POST(req: NextRequest) {
  let request = await req.json();
  try {
    if (request.product_id && request.quantity && request.user_id) {
      let response = await db
        .insert(cartTableDrizzle)
        .values(dataToInsert)
        .returning();
      return NextResponse.json({ response });
    } else {
      throw new Error("Please Add Product_id , Quantity and User_id");
    }
  } catch (error) {
    console.log("error:", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}
export async function PUT(req: NextRequest) {
  let request = await req.json();
  try {
    let response = await db
      .update(cartTableDrizzle)
      .set(request)
      .where(eq(cartTableDrizzle.product_id, request.product_id))
      .returning();
    console.log(response);
    return NextResponse.json({ response });
  } catch (error) {
    console.log("error:", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}
export async function DELETE(req: NextRequest) {
  let url = req.nextUrl.searchParams;
  try {
    if (url.has("product_id") && url.has("user_id")) {
      let response = await db
        .delete(cartTableDrizzle)
        .where(
          eq(cartTableDrizzle.product_id, url.get("product_id") as string) &&
            eq(cartTableDrizzle.user_id, url.get("user_id") as string)
        )
        .returning();
      console.log("first", response);
      return NextResponse.json({ response });
    }
  } catch (error) {
    console.log("error:", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}
