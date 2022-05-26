<script context="module">
  export const prerender = true;
</script>
<script>
  import SectionContainer from "../../lib/common/SectionContainer.svelte";
  import PageTitle from "../../lib/common/PageTitle.svelte";
  import { page } from '$app/stores';
  const {settings} = $page.stuff;
  export let cmspage;
</script>

<svelte:head>
  <title>{cmspage.title} | {settings.title}</title>
  <meta name="description" content="{cmspage.excerpt}" />
</svelte:head>

<SectionContainer>
  <article>
    <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header class="pt-6 xl:pb-6">
        <div class="space-y-1 text-center">
          <dl class="space-y-10">

          </dl>
          <div>
            <PageTitle>{cmspage.title}</PageTitle>
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
                key={cmspage.primary_author.name}
              >
                <img
                  src={cmspage.primary_author.profile_image}
                  width="38px"
                  height="38px"
                  alt="avatar"
                  class="h-10 w-10 rounded-full"
                />
                <dl class="whitespace-nowrap text-sm font-medium leading-5">
                  <dt class="sr-only">Name</dt>
                  <dd class="text-base-content ">
                    {cmspage.primary_author.name}
                  </dd>
                  <dt class="sr-only">Twitter</dt>
                  <dd>
                    <a
                      href="https://twitter.com/{cmspage.primary_author.twitter}"
                      class="text-accent hover:text-primary"
                    >
                      {cmspage.primary_author.twitter.replace(
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
              {#if cmspage.feature_image}
              <img
                class="rounded-md shadow-xl"
                src={cmspage.feature_image} alt="{cmspage.title}" >
                {/if}
            {@html cmspage.html}
          </div>
        </div>
        <footer>
          <div
            class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-1 xl:gap-x-1 xl:divide-y-0"
          >
            <div class="py-4 xl:py-8">


            </div>

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
