<script>
  export let title
  export let images
  let idx = 0
  let interval
  const handleMouseenter = () => {
    interval = setInterval(() => {
      idx = (idx + 1) % images.length
    }, 1000)
  }
  const handleMouseleave = () => {
    clearInterval(interval)
  }
</script>

<img
  class="h-100 w-auto"
  on:mouseenter={handleMouseenter}
  on:mouseleave={handleMouseleave}
  alt={title}
  src={images[idx]} />
