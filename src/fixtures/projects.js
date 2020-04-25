import {
  stravaMaps,
  djangoNews,
  trekkpedia,
  revues,
  playingWithCanvas,
  portfolio,
} from '../assets/projects'

export default [
  {
    title: 'Strava Maps',
    text: `This application leverages on the use of Strava API, 
    providing users custom visualizations of their own activities.
    You may also opt to interact on mocked data if you are not willing to sync with your strava account (or if you don't have one).`,
    textMore: `As a big user of Strava, I have a lot of fun empowering myself through coding to visualize my data in ways the proper Strava can't show me.
    This application started as something just to keep my mind busy while quarantining, but I turned out to really enjoy coding on it.
    It's my favorite stack (React + Graphql + Express + Typescript) and it allows me learn while providing myself some useful results on Strava.
    This project keeps me motivated for both coding and running.`,
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
    link: 'https://marcelotokarnia.github.io',
  },
  {
    title: 'Trekkpedia',
    text: `The main idea behind this project was to experiment on Vue Framework.
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
      'Stylus',
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
    I refurbished this django-news into this portfolio when studying Svelte.
    But Django-News actually have a backend attached to it, so you can log in, filter your selection (and save your preferred selection) for reading the news.`,
    textMore: `As the mentioned tags already describe a bit too briefly:
    This application is based on bootstrap and tachyons for styling (and custom style by Stylus preprocessor),
    And Django powered by Django Rest Framework on the backend.
    The frontend logic and presentation was constructed using React and all the state management uses Redux.
    This is the one and only project, even though small, I put effort on the presentation side, 
    I usually prefer to skip this and jump straight to the logic challenges, 
    but with this one I learned a bunch about bootstrap, open graph, stylus ... It was a fun project.`,
    images: djangoNews,
    tags: [
      'Django Rest Framework',
      'Django',
      'Python',
      'React',
      'Webpack',
      'Bootstrap',
      'Stylus',
      'Tachyons',
      'PostgreSQL',
      'Jest',
      'Redux',
    ],
    repo: 'https://github.com/marcelotokarnia/django-news/',
    link: 'https://django-news.herokuapp.com/news',
  },
  {
    title: 'ReVue',
    text: `No, it's not about the Revue dance, it's a Review application made with Vue 🤦🏻‍♂️.
    This is a simple project, done in a few days for an application back in 2018.
    It's a graphql API to write reviews / ratings, with user interface to list user specific reviews.`,
    textMore: `Frontend: Vue (powered by Wotan Linter and Typescript) and bundled with Webpack.
    Backend: Python and Django (powered by Graphene Graphql API).
    Authentication with JWT tokens and styling with Bootstrap.`,
    images: revues,
    tags: ['Graphene', 'Django', 'JWT', 'Vue', 'Webpack', 'Python', 'Bootstrap', 'PostgreSQL'],
    repo: 'https://bitbucket.org/marcelotokarnia/revues',
    link: 'https://www.youtube.com/watch?v=1ijx3dyC5HE',
  },
  {
    title: 'Playing with Canvas',
    text: `This is a simple geometry app using CreateReactApp to plot some geometrical forms on a canvas.
    Each click on the canvas will update one of the three point references in a cyclic order (P0, P1, P2, P0, P1...). Each point is highlighted with a red circle.
    After P0, P1 and P2 are set, the app calculates P3 so that, P0-P1-P2-P3 forms a parallelogram, which is ploted in blue.
    Also it plots a yellow circle, which has the same area and centre of mass as the parallelogram.`,
    textMore: `Red circle, blue parallelogram and yellow circle are updated within each click.
    RESET CANVAS button erases all point references (and derived shapes).
    SHAPES DETAILS tab displays updated X (from left to right) and Y (from top to bottom) coordinates (in an ordered pair (x, y)) of each point, as well as the centre of mass and area (both the same for both shapes).
    ABOUT THE APP tab displays these same instructions and information about myself 🤓`,
    images: playingWithCanvas,
    tags: ['React', 'Canvas', 'Redux', 'Stylus'],
    repo: 'https://github.com/marcelotokarnia/playing-with-canvas',
    link: 'https://canvas-tokarnia.now.sh/',
  },
]
