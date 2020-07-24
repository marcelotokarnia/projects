import { portfolio } from '../assets/projects'

export default {
  title: 'Svelte Portfolio',
  text: `It's actually this exact page you are seeing right now 😆.
    This is a test project to experiment on a new frontend framework (at least for me) called Svelte.
    It did bring me back nostalgic moments from AngularJS, in a structure similar to Vue (.vue / .svelte files).
    But with a tooling similar to React. So felt like a big mesh up but I can see it's potential.`,
  textMore: `I reused the responsive styling I once created for Django News project and did a few improvements to fit this new need.
    The profile page was created using a Resume template provided by startbootstrap.
    As an attempt to organize my portfolio with a bit more condensed (and visual) information than the spread version of it in Github.`,
  images: portfolio,
  tags: ['Svelte', 'Tachyons', 'Bootstrap', 'Javascript', 'Rollup'],
  repo: 'https://github.com/marcelotokarnia/marcelotokarnia.github.io',
  link: 'https://projects.tokks.tech',
}
