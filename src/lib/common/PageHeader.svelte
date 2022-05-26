<script>
    export let subtitle;
    export let title;
    export let content;
</script>
<div class="flex flex-col text-center w-full mb-20">
    <h2 class="text-xs text-accent tracking-widest font-medium title-font mb-1 uppercase">{subtitle}</h2>
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-base-content">{title}</h1>
    <p class="lg:w-2/3 mx-auto leading-relaxed text-base-content">{content}</p>
  </div>
