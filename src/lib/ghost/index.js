import GhostContentAPI from "@tryghost/content-api";


const api = new GhostContentAPI({
    url: "https://www.brian.dev",
    key: 'd530b63612972c36c8f324d61f',
    version: "v3",
});

export async function getSettings() {
    try {
        const settings = await api.settings.browse();
        return {
             settings
        };
    } catch (err) {
        console.error(err);
        return {
            error: new Error(`Could not load url`),
        };
    }
}

export async function getFeaturedPosts() {
    try {
        const posts = await api.posts.browse({
            limit: 3,
            filter: "featured:true",
            include: "tags,authors",
        });
        return {
            posts
        };
    } catch (err) {
        console.error(err);
        return {

            error: new Error(`Could not get posts`),
        };
    }
}


export async function readPost(slug) {
    try {
        const post = await api.posts.read({
            slug: slug,
            formats: ["html"],
            include: "tags,authors",
        });
        return {
            post
        };
    } catch (err) {
        console.error(err);
        return {
            error: new Error(`Could not get post`),
        };
    }
}
export async function readPage(slug) {
    try {
        const page= await api.pages.read({
            slug: slug,
            formats: ["html"],
            include: "tags,authors",
        });
        return {
            page
        };
    } catch (err) {
        console.error(err);
        return {
            error: err,
        };
    }
}
export async function updatePost(slug, { title, tags, markdown }) {
}

export async function deletePost(slug) {
}

export async function getRelatedPosts(post) {
    return posts
}


export async function login(username, password) {
    return (
        username === 'admin' &&
        password === '123'
    )
}

export async function logout() {
    return true
}
