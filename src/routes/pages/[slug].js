import api from "../../lib/data";

// Fetch all valid posts & authors to display in the homepage
export async function get({ params }) {
  console.log("Attempting to get page with slug: " + params.slug);

  const { page } = await api.readPage(params.slug);
  if (page) {
    return {
      status: 200,
      body: { cmspage: page }
    };
  }
  return {
    status: 404,
  }
}

