<script>
  import RotatingImages from './RotatingImages.svelte'
  import GithubSource from './GithubSource.svelte'
  import Tags from './Tags.svelte'
  import { cond, equals, always, T } from 'ramda'

  export let title
  export let size
  export let images
  export let text
  export let tags
  export let repo
  export let link

  const getClasses = cond([
    [equals('big'), always('col-md-6')],
    [equals('medium'), always('col-md-3 col-sm-6')],
    [T, always('col-md-4 col-sm-6')],
  ])
</script>

<style>
  a:visited {
    color: white;
  }
</style>

<div class={getClasses(size)}>
  <button class="pointer w-100 overflow-hidden db relative news-thumbnail-post__link">
    <RotatingImages {title} {images} />
    <a
      class="db bg-black-30 hover-bg-black-60 bg-animate white pv3 ph4 ba b--white absolute
      news-thumbnail__btn"
      href={link}>
      See it live
    </a>
  </button>
  <div class="flex mb2">
    <div class="flex-auto">
      <h1 class={`pointer ${size === 'big' ? 'f1' : 'f3'} b`}>{title}</h1>
      <Tags {tags} />
    </div>
    <GithubSource {repo} />
  </div>

  <div class="f4 dark-gray">
    {#each text.split('\n') as line}
      <p>{line}</p>
    {/each}
  </div>
</div>
