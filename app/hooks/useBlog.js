import { useQuery } from "@tanstack/react-query";
import { getDawngamesBlogs, getBlogById } from "../utils/api";

export const useBlog = () => {
  return useQuery({
    queryKey: ["dawngames-blogs"],
    queryFn: getDawngamesBlogs,
  });
};

export const useSingleBlog = (id) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
};