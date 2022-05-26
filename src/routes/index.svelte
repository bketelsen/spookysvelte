<script context="module">
  export const prerender = true;
</script>
<script>
  import Hero from "../lib/common/Hero.svelte";
  import PageHeader from "../lib/common/PageHeader.svelte";
  import Role from "../lib/common/Role.svelte";
  import { page } from "$app/stores";
  const { settings } = $page.stuff;
  export let posts;
  import Card from "$lib/posts/Card.svelte";
</script>

<svelte:head>
  <title>Home | {settings.title}</title>
  <meta name="description" content={settings.description} />
</svelte:head>
<Hero
  title="Hello"
  content="Thank you for joining me while I learn in the open."
  action="Keep Reading"
  destination="#welcome"
/>
<section class="text-gray-600 body-font">
  <a id="welcome" />

  <div class="container px-5 py-24 mx-auto">
    <PageHeader
      subtitle="Welcome to the machine"
      title="Brian Ketelsen"
      content="some content here"
    />
    <div class="flex flex-wrap">

      <Role title="Developer Advocate"
        description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
        url="/pages/devrel" />
      <Role title="Keynote Speaker"
        description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
        url="/pages/speaking" />
        <Role title="Open Source Contributor"
        description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
        url="/pages/open-source" />
        <Role title="Engineering Leader"
        description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
        url="/pages/leadership" />
    </div>

    <a href="#recent"
      ><button class="flex mx-auto mt-16 btn btn-primary  ">Featured Posts</button
      ></a
    >
  </div>
</section>

<a id="recent" />
<div
  class="relative bg-base-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
>
  <div class="absolute inset-0">
    <div class="bg-base-300 h-1/2" />
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2
        class="text-3xl tracking-tight font-extrabold text-base-content sm:text-4xl"
      >
        Featured Posts
      </h2>

    </div>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {#each posts as post}
        <Card {post} />
      {/each}
    </div>
    <a href="/posts/"
      ><button class="flex mx-auto mt-16 btn btn-primary  "
        >View All Posts</button
      ></a
    >
  </div>
</div>
