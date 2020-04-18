<script>
  import { take } from 'ramda'
  export let tags
  let tagsShown = take(5, tags)
</script>

<div class="mb2">
  {#each tagsShown as tag}
    <span class="f4 ttu grow br-pill ph2 pv2 mr1 dib black bg-light-gray">{tag}</span>
  {/each}
  {#if tagsShown.length != tags.length}
    <span
      on:click={() => (tagsShown = tags)}
      class="f4 ttu grow br-pill ph2 pv2 mr1 dib black bg-light-gray pointer">
      +{tags.length - tagsShown.length}
    </span>
  {/if}
</div>
