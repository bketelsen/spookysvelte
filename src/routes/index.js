import api from "../lib/data";

// Fetch all valid posts & authors to display in the homepage
export async function get() {
  const { posts } = await api.getFeaturedPosts();
  if (posts) {
    return {
      status: 200,
      body: { posts }
    };
  }
  return {
    status: 404,
  }

}
