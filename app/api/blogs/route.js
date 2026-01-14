import axios from "axios";

export async function GET() {
  const res = await axios.get(
    "https://cognixadmin.cognixtech.org/api/blogs",
    {
      params: {
        populate: "*",
        "filters[productType][$eq]": "dawngames",
        sort: ["date:desc"],
      },
    }
  );

  return Response.json(res.data);
}
