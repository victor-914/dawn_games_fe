import axios from "axios";

// Updated to your live production URL
const STRAPI_URL = "https://cognixadmin.cognixtech.org";

export async function GET() {
  try {
    const res = await axios.get(`${STRAPI_URL}/api/faqs`, {
      params: {
        "filters[productType][$eq]": "dawngames",
      },
    });
    return Response.json(res.data);
  } catch (error) {
    console.error("Strapi Error:", error?.response?.data || error.message);
    return Response.json({ error: "Failed to fetch FAQs" }, { status: 500 });
  }
}