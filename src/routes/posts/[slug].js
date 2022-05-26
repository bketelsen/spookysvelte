import api from "../../lib/data";

// Fetch all valid posts & authors to display in the homepage
export async function get({params}) {
  try {
    const { post } = await api.readPost(params.slug);
    return {
      status: 200,
      body: { post: post }
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      error: new Error(`Could not load url`),
    };
  }
}

