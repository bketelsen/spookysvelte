<script context="module">
  export const prerender = true;
</script>
<script>
    import Card from "../../lib/posts/Card.svelte";
    import { page } from "$app/stores";
  const { settings } = $page.stuff;
	export let posts;
</script>

<svelte:head>
  <title>Home | {settings.title}</title>
  <meta name="description" content="{settings.description}" />
</svelte:head>

<div
  class="relative bg-base-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
>
  <div class="absolute inset-0">
    <div class="bg-base-300 h-1/6" />
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2
        class="text-3xl tracking-tight font-extrabold text-base-content sm:text-4xl"
      >
        From the blog
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-base-content sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.
      </p>
    </div>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {#each posts as post}
        <Card {post} />
      {/each}
    </div>
  </div>
</div>
