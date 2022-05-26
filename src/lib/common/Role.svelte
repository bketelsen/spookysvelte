<script>
  export let title;
  export let description;
  export let url;
</script>

<div
  class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-primary border-opacity-60"
>
  <h2 class="text-lg sm:text-xl text-primary font-medium title-font mb-2">
    {title}
  </h2>
  <p class="leading-relaxed text-base-content mb-4">
    {description}
  </p>
  <a href={url} class="text-secondary inline-flex items-center"
    >Learn More
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </a>
</div>
