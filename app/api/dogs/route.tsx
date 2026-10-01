import { NextResponse } from "next/server";

// THIS IS API ENDPOINT
export async function GET(request: Request){

  return NextResponse.json({ name: "chapu", age: 3 })
}