<script>
  import MediaImage from './MediaImage.svelte'
  import { cond, equals, always, T } from 'ramda'

  export let title
  export let size
  export let images
  export let text

  const getClasses = cond([
    [equals('big'), always('col-md-6')],
    [equals('medium'), always('col-md-3 col-sm-6')],
    [T, always('col-md-4 col-sm-6')],
  ])
</script>

<div class={getClasses(size)}>
  <p class="ttu f5" style={{ color: 'red' }}>React</p>
  {#if size !== 'small'}
    <button class="pointer w-100 overflow-hidden db relative news-thumbnail-post__link">
      <MediaImage {title} {images} />
      <button
        class="dn db-l bg-black-30 hover-bg-black-60 bg-animate white pv3 ph4 ba b--white absolute
        news-thumbnail__btn">
        Read More
      </button>
    </button>
  {/if}
  <h1 class={`pointer ${size === 'big' ? 'f1' : 'f3'} b`}>{title}</h1>
  <p class={`f4 gray ${size === 'big' ? 'dn-m dn-l' : ''}`}>{text}</p>
</div>
