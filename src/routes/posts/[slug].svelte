<script context="module">
  export const prerender = true;
</script>
<script>
  import SectionContainer from "../../lib/common/SectionContainer.svelte";
  import PageTitle from "../../lib/common/PageTitle.svelte";
  import PrimaryTag from "../../lib/posts/PrimaryTag.svelte";
  export let post;
  const postDateTemplate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const next = false;
  const prev = false;
</script>
<svelte:head>
  <title>{post.title} | Brian Ketelsen</title>
  <meta name="description" content="{post.excerpt}" />
</svelte:head>
<SectionContainer>
  <article>
    <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header class="pt-6 xl:pb-6">
        <div class="space-y-1 text-center">
          <dl class="space-y-10">
            <div>
              <dt class="sr-only">Published on</dt>
              <dd
                class="text-base font-medium leading-6 text-primary"
              >
                <time dateTime={post.published_at}>
                  {new Date(post.published_at).toLocaleDateString(
                    "en-US",
                    postDateTemplate
                  )}
                </time>
              </dd>
            </div>
          </dl>
          <div>
            <PageTitle>{post.title}</PageTitle>
          </div>
        </div>
      </header>
      <div
        class="divide-y divide-base-200 pb-8  xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
        style="grid-template-rows: auto 1fr;"
      >
        <dl
          class="pt-6 pb-10 xl:border-b xl:border-base-200 xl:pt-11 "
        >
          <dt class="sr-only">Authors</dt>
          <dd>
            <ul
              class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
            >
              <li
                class="flex items-center space-x-2"
                key={post.primary_author.name}
              >
                <img
                  src={post.primary_author.profile_image}
                  width="38px"
                  height="38px"
                  alt="avatar"
                  class="h-10 w-10 rounded-full"
                />
                <dl class="whitespace-nowrap text-sm font-medium leading-5">
                  <dt class="sr-only">Name</dt>
                  <dd class="text-base-content ">
                    {post.primary_author.name}
                  </dd>
                  <dt class="sr-only">Twitter</dt>
                  <dd>
                    <a
                      href="https://twitter.com/{post.primary_author.twitter}"
                      class="text-accent hover:text-primary"
                    >
                      {post.primary_author.twitter.replace(
                        "https://twitter.com/",
                        "@"
                      )}
                    </a>
                  </dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>
        <div
          class="divide-y divide-base-200  xl:col-span-3 xl:row-span-2 xl:pb-0"
        >
          <div class="prose prose-lg max-w-none pt-10 pb-8">
              {#if post.feature_image}
              <img
                class="rounded-md shadow-xl"
                src={post.feature_image} alt="{post.title}" >
                {/if}
            {@html post.html}
          </div>
        </div>
        <footer>
          <div
            class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-1 xl:gap-x-1 xl:divide-y-0"
          >
            <div class="py-4 xl:py-8">
              <h2
                class="mb-2 text-xs uppercase tracking-wide text-base-content"
              >
                Tags
              </h2>
              <div class="flex flex-wrap">
                <PrimaryTag tag={post.primary_tag} />
            </div>
            </div>
            {#if next || prev}
              <div
                class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8"
              >
                {#if prev}
                  <div>
                    <h2
                      class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                    >
                      Previous Article
                    </h2>
                    <div
                      class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <a href={`/blog/${prev.slug}`}>{prev.title}</a>
                    </div>
                  </div>
                {/if}
                {#if next}
                  <div>
                    <h2
                      class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                    >
                      Next Article
                    </h2>
                    <div
                      class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <a href={`/blog/${next.slug}`}>{next.title}</a>
                    </div>
                  </div>
                {/if}
              </div>
            {/if}
          </div>
          <div class="pt-4 xl:pt-8">
            <a
              href="/posts"
              class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              &larr; Back to the blog
            </a>
          </div>
        </footer>
      </div>
    </div>
  </article>
</SectionContainer>
