import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'master',
  repo: 'https://cardechr.github.io/svelte-kit-pokedex', // Update to point to your repository
  user: {
   name: 'Chris Cardenas', // update to use your name
   email: 'cardechr.dev@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);