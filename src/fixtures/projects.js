import { stravaMaps, djangoNews, trekkpedia } from '../assets/projects'

export default [
  {
    title: 'Strava Maps',
    text: `This application leverages on the use of Strava API, 
    providing users custom visualizations of their own activities.
    You may also opt to interact on mocked data if you are not willing to sync with your strava account (or if you don't have one).`,
    textMore: '',
    images: stravaMaps,
    tags: [
      'Graphql',
      'React',
      'Tachyons',
      'Redis',
      'Redux',
      'Jest',
      'Javascript',
      'Typescript',
      'Node',
      'Express',
      'Supertest',
    ],
    repo: 'https://github.com/marcelotokarnia/strava-maps',
    link: 'https://strava-maps.herokuapp.com/',
  },
  {
    title: 'Svelte Portifolio',
    text: `It's actually this exact page you are seeing right now 😆.
    This is a test project to experiment on a new frontend framework (at least for me) called Svelte.
    It did bring me back nostalgic moments from AngularJS, in a structure similar to Vue (.vue / .svelte files).
    But with a tooling similar to React. So felt like a big mesh up but I can see it's potential.`,
    textMore: '',
    images: stravaMaps,
    tags: ['Svelte', 'Tachyons', 'Bootstrap', 'Javascript', 'Rollup'],
    repo: 'https://github.com/marcelotokarnia/marcelotokarnia.github.io',
    link: 'https://marcelotokarnia.github.io',
  },
  {
    title: 'Trekkpedia',
    text: `The main idea behind this project was study about to experiment on Vue Framework.
    But it grew way bigger than that, I started experimenting on state management with Apollo Link State, 
    linting with Wotan and even automated blue-green deploys on EC2 instances using docker images generated from the project.
    It's a simple project, it shows the mountains around you, and tells you how far they are from your position and how high they are.`,
    textMore: `I learned a lot from this project, how to deal with GDAL and Postgis for georeferenced databases and operations on it.
    How to store, alter and retrieve Docker instances and how to leverage on those to develop and deploy.
    I learned a lot about Apollo Link State, which to be honest was not my favorite state manager but still very rewarding to answer a few questions about it on StackOverflow, since not a lot of people were using it back then.
    Also it was my first Graphene implementation for a Graphql API on a Django Backend, I must say I still prefer Apollo's Node implementation, but any kind of knowledge broadens your potential, it was still worth it.
    I'm biased to express my opinions about Node anyways 😆`,
    images: trekkpedia,
    tags: [
      'Vue',
      'Docker',
      'AWS',
      'Postgis',
      'Bootstrap',
      'Typescript',
      'Graphql',
      'Graphene',
      'Apollo Link State',
      'Webpack',
      'Django',
      'Python',
    ],
    repo: 'https://github.com/marcelotokarnia/mountains-catalog',
    link: 'http://54.90.205.133/',
  },
  {
    title: 'Django News',
    text: `In case you think the template is similar from this very website, you are totally correct.
    I refurbished this django-news into this portifolio when studying Svelte.
    But Django-News actually have a backend attached to it, so you can log in, filter your selection (and save your preferred selection) for reading the news.`,
    textMore: `As the mentioned tags already describe a bit too briefly:
    This application is based on bootstrap and tachyons for styling,
    And Django powered by Django Rest Framework on the backend.
    The frontend logic and presentation was constructed using React and all the state management uses Redux.
    This is the one and only project, even though small, I put effort on the presentation side, 
    I usually prefer to skip this and jump straight to the logic challenges, 
    but with this one I learned a bunch about bootstrap specially, it was a fun project.`,
    images: djangoNews,
    tags: [
      'Django Rest Framework',
      'Django',
      'Python',
      'React',
      'Webpack',
      'Bootstrap',
      'Tachyons',
      'PostgreSQL',
      'Jest',
      'Redux',
    ],
    repo: 'https://github.com/marcelotokarnia/django-news/',
    link: 'https://django-news.herokuapp.com/news',
  },
]
