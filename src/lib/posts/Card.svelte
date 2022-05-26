<script>
    import PrimaryTag from "./PrimaryTag.svelte";
  export let post;
</script>

<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
  {#if post.feature_image}
    <div class="flex-shrink-0">
      <img
        class="h-48 w-full object-cover"
        src={post.feature_image}
        alt={post.title}
      />
    </div>
  {/if}
  <div class="flex-1 bg-base-100 p-6 flex flex-col justify-between">
    <div class="flex-1">
      {#if post.featured}
        <div class="badge badge-secondary">FEATURED</div>
      {/if}
        <PrimaryTag tag={post.primary_tag} />

      <a href="/posts/{post.slug}" class="block mt-2">
        <p class="text-xl font-semibold text-base-content">{post.title}</p>
        <p class="mt-3 text-base text-base-content">{post.excerpt}</p>
      </a>
    </div>
    <div class="mt-6 flex items-center">
      <div class="flex-shrink-0">
        <a href="/pages/about">
          <span class="sr-only"
            >{post.primary_author ? post.primary_author.name : ""}</span
          >
          <img
            class="h-10 w-10 rounded-full"
            src={post.primary_author.profile_image}
            alt=""
          />
        </a>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-base-content">
          <a href="/pages/about" class="hover:underline">
            {post.primary_author ? post.primary_author.name : ""}
          </a>
        </p>
        <div class="flex space-x-1 text-sm text-base-content">
          <time datetime="2020-03-16"> Mar 16, 2020 </time>
          <span aria-hidden="true"> &middot; </span>
          <span> {post.reading_time} min read </span>
        </div>
      </div>
    </div>
  </div>
</div>
