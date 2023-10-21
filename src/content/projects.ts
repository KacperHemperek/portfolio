import shoppingifyImage from '~/assets/shoppingify_project.png';
import twitterImage from '~/assets/twitter_clone_project.png';
import { DetailedProjectCardProps } from '~/components/common/detailed-project-card';
import { socials } from '~/utils/socials';

export const featuredProjects: DetailedProjectCardProps[] = [
  {
    title: 'Shoppingify',
    image: shoppingifyImage,
    skills: [
      'TRPc',
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Prisma',
      'MySQL',
      'redux-toolkit',
    ],
    description:
      'Simple shopping list app that allows you to create shopping lists and track your food consumption',
    features: [
      'Create a list of products that you use often and build shopping lists with them.',
      'Check out statistics of items that you use the most and how much of each item you already bought each month.',
      'You can also track you old lists and see if you stopped buying certain items or if you started buying new ones.',
    ],
    link: 'https://shoppingify.kacperhemperek.com/',
    repoLink: `${socials.github.url}/shoppingify-next`,
  },

  {
    title: 'Twitter Clone',
    image: twitterImage,
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Prisma',
      'MySQL',
      'AuthJS',
      'Radix-UI',
    ],
    description: 'Twitter clone with basic functionalities of the original app',
    features: [
      'Create an account and log in to your profile',
      'Create posts and comment on other posts',
      'Like posts and comments',
      'Follow other users and see their posts on your feed',
      'Edit your profile, change your nickname, description, links to external sites, and location',
    ],
    link: 'https://twitter.kacperhemperek.com/',
    repoLink: `${socials.github.url}/twitter-clone`,
  },
];

export const otherProjects = [
  {
    title: 'Country Info',
    skills: ['React', 'styled-components', 'React Router', 'SWR', 'TypeScript'],
    link: 'https://country-info-psi.vercel.app/',
    repoLink: 'https://github.com/KacperHemperek/country-info',
    description:
      'Application that allows you to search for countries and see their basic information like population, area, capital, and more.',
  },
  {
    title: 'Country Quiz',
    skills: ['React', 'styled-components', 'SWR', 'TypeScript'],
    link: 'https://country-quiz-alpha.vercel.app/',
    repoLink: 'https://github.com/KacperHemperek/country-quiz',
    description:
      'Application that allows you to test your knowledge about countries, their capitals and flags.',
  },
];
