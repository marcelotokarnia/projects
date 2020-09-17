<script>
  import RotatingImages from './RotatingImages.svelte'
  import GithubSource from './GithubSource.svelte'
  import Tags from './Tags.svelte'
  import { cond, equals, always, T } from 'ramda'
  let readMore = false

  export let title
  export let size
  export let images
  export let text
  export let tags
  export let repo
  export let link
  export let textMore

  const getClasses = cond([
    [equals('big'), always('col-md-6 pt6')],
    [equals('medium'), always('col-md-3 col-sm-6 pt6')],
    [T, always('col-md-4 col-sm-6 pt6')],
  ])
</script>

<style>
  a:visited {
    color: white;
  }
  a:hover {
    color: white;
  }
</style>

<div class={getClasses(size)}>
  <button class="cursor-auto w-100 overflow-hidden db relative project-thumbnail-post__link">
    <RotatingImages {title} {images} />
    <a
      class="db bg-black-30 hover-bg-black-60 bg-animate white pv3 ph4 ba b--white absolute
      project-thumbnail__btn"
      href={link}>
      See it live
    </a>
  </button>
  <div class="flex mb2">
    <div class="flex-auto">
      <h1 class={`${size === 'big' ? 'f1' : 'f3'} b`}>{title}</h1>
      <Tags {tags} />
    </div>
    <GithubSource {repo} />
  </div>

  <div class="f4">
    {#each text.split('\n') as line}
      <p>{line}</p>
    {/each}
  </div>
  {#if !readMore}
    <button
      class="f5 link grow dim ba ph4 b--black bg-white pv2 mb2 dib black absolute
      project-readmore__btn"
      on:click={() => (readMore = true)}>
      Read more ...
    </button>
    <hr />
  {:else}
    <hr />
    {#each textMore.split('\n') as line}
      <p>{line}</p>
    {/each}
    <button
      class="f5 link grow dim ba ph4 b--black bg-white pv2 mb2 dib black absolute
      project-readmore__btn"
      on:click={() => (readMore = false)}>
      Collapse back
    </button>
    <hr />
  {/if}
</div>
