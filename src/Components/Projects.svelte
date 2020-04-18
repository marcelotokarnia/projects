<script>
  import { append, cond, equals, isEmpty, always, gte, T, prepend, take, drop } from 'ramda'
  import Project from './Project.svelte'
  import projects from '../fixtures/projects'

  const getSize = cond([
    [equals(0), always('big')],
    [gte(2), always('medium')],
    [T, always('small')],
  ])

  const separateProjects = list =>
    isEmpty(list) ? [] : prepend(take(3, list), separateProjects(drop(3, list)))

  const projectsTransform = projects =>
    separateProjects(
      projects.reduce((acc, proj, idx) => {
        const { title, text, images } = proj
        const size = getSize(idx)
        return append(
          {
            title,
            text,
            images,
            size: 'big',
          },
          acc
        )
      }, [])
    )
  const containers = projectsTransform(projects)
</script>

{#each containers as container, idx}
  <div key={idx} class="container mb4 relative">
    {#each container as { title, text, images, size }}
      <Project {title} {text} {size} {images} />
    {/each}

    {#if idx !== containers.length - 1}
      <hr class="hidden-xs absolute w-100 bottom--2" />
    {/if}
  </div>
{/each}
