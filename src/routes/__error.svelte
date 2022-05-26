<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ error, status }) {
        if (status === 404) {
            return {
        props: {
          title: `${status}: Page Not Found`,
        }
      };        }
      return {
        props: {
          title: `${status}: ${error.message}`
        }
      };
    }
  </script>

  <script>
    export let title;
  </script>


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
       {title}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-base-content sm:mt-4">
        It seems we have a problem...
      </p>
    </div>

  </div>
</div>
