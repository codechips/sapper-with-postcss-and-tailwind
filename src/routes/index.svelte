<style lang="postcss">
  .btn {
    @apply bg-red-500 text-red-100 uppercase tracking-wide font-semibold
      text-4xl px-4 py-3 shadow-lg rounded;
  }
  .btn:hover {
    @apply bg-red-600;
  }
  :global(a) {
    @apply underline;
  }
  :global(p) {
    @apply text-lg;
  }
</style>

<script>
  import { slide } from 'svelte/transition';

  let show = false;
</script>

<svelte:head>
  <title>Sapper with PostCSS and Tailwind</title>
</svelte:head>

<div class="space-y-8">
  <div>
    <h2 class="text-8xl font-semibold">Sapper Boilerplate</h2>
    <p class="text-5xl">
      with <strong>PostCSS</strong> and <strong>Tailwind</strong>
    </p>
  </div>
  <p class="text-lg">
    This is working example <strong>Sapper</strong> app with the easiest <strong
    >PostCSS</strong> + <strong>Tailwind</strong> setup.
  </p>
  <p>
    You can find the code at <a href="https://github.com/codechips/sapper-with-postcss-and-tailwind"> github.com/codechips/sapper-with-postcss-and-tailwind </a>
  </p>
  <p>If you want to know all the juicy details read the blog post.</p>
  <p>
    <a
      class="font-semibold text-2xl text-blue-500"
      href="https://codechips.me/sapper-with-postcss-and-tailwind/"
    >Solid Sapper setup with PostCSS and Tailwind</a>
  </p>
  {#if show}
    <div transition:slide|local class="text-center bg-gray-200 p-20">
      <h2 class="text-7xl text-gray-600 mb-10 uppercase font-bold">
        Great success!
      </h2>
      <img class="min-w-full" src="success.jpg" alt="wovaweewa!" />
    </div>
  {/if}
  <button class="btn" on:click={() => (show = !show)}>don't press this button.
    seriosly.</button>
</div>
