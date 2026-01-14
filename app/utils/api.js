import axios from "axios";

const LIVE_STRAPI_URL = "https://cognixadmin.cognixtech.org";

export const getStrapiMedia = (url) => {
  if (!url) {
    console.warn("getStrapiMedia: No URL provided");
    return null;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  const fullUrl = `${LIVE_STRAPI_URL}${url.startsWith('/') ? url : `/${url}`}`;
  console.log("Image URL:", fullUrl);
  return fullUrl;
};

export const getStrapiImageUrl = (imgObject) => {
  if (!imgObject) return null;
  
  const formats = imgObject.formats;
  if (formats) {
    if (formats.small?.url) {
      return getStrapiMedia(formats.small.url);
    }
    if (formats.thumbnail?.url) {
      return getStrapiMedia(formats.thumbnail.url);
    }
    if (formats.medium?.url) {
      return getStrapiMedia(formats.medium.url);
    }
  }
  
  return getStrapiMedia(imgObject.url);
};

export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`/api/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog ${id}:`, error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const payload = {
      ...formData,
      productType: "dawngames", 
    };
    
    const response = await axios.post(`/api/contacts`, payload);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export const getDawngamesBlogs = async () => {
  try {
    const response = await axios.get(`/api/blogs`); 
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};


export const getFaqs = async () => {
  try {
    const response = await axios.get(`/api/faqs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    throw error;
  }
};