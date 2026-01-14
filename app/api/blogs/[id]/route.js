import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params; 
  
  try {
    const res = await axios.get(`https://cognixadmin.cognixtech.org/api/blogs/${id}?populate=*`);
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}