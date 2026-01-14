import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    
    const res = await axios.post(`https://cognixadmin.cognixtech.org/api/contacts`, {
      data: body
    });

    return NextResponse.json(res.data);
  } catch (error) {
    console.error("Contact Error:", error.response?.data || error.message);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}