<script>
    export let label;
    export let url;
    $: resolved_url = url === "/" ? "/" : `/pages${url}`;
</script>
<a href="{resolved_url}" class="btn btn-ghost btn-sm rounded-btn" > {label} </a>


