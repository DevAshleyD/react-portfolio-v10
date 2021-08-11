import github from '../../../assets/portfolio/github.png';
import medium from '../../../assets/portfolio/medium.png';
import npm from '../../../assets/portfolio/npm.png';
import ArticlesPortfolio from './articles';
import GitHubPortfolio from './github';;

export default [
  {
    component: GitHubPortfolio,
    path: 'github',
    src: github,
    title: 'GitHub Repositories'
  },
  {
    component: ArticlesPortfolio,
    path: 'articles',
    src: medium,
    title: 'Publications'
  },
];
