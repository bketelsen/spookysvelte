<script>
  import { page } from '$app/stores';
  const {settings} = $page.stuff;
  export let title;
  export let content;
  export let action;
  export let destination;

</script>

<div class="hero min-h-min" style="background-image: url({settings.cover_image});">
  <div class="hero-overlay bg-opacity-70"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">{title}</h1>
      <p class="mb-5">{content}</p>
      <a href={destination} class="btn btn-primary">{action}</a>
    </div>
  </div>
</div>

