import GhostContentAPI from "@tryghost/content-api";

// Fetch all valid posts & authors to display in the homepage
export async function get() {
    const api = new GhostContentAPI({
        url: "https://content.brian.dev",
        key: 'd530b63612972c36c8f324d61f',
        version: "v3",
      });
      try {
        const posts = await api.posts.browse({
          limit: "all",
          include: "tags,authors",
        });
          return {
              status: 200,
            body: { posts }
          };
      } catch (err) {
        console.error(err);
        return {
          status: 500,
          error: new Error(`Could not load url`),
        };
      }
}
