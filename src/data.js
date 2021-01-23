import FeedersScreen from './images/portfolios/FeedersScreen.png';
import FlatironMovieScreen from './images/portfolios/FlatironMovieScreen.png';
import MarketTrackingAppScreen from './images/portfolios/MarketTrackingAppScreen.png';

export const data = {
  firstName: "Yunhao",
  lastName: "Gao",
  nickName: "Eddy",
  programmingLanguage: {
    primary: ["JavaScript", "React.js", "Redux.js"],
    others: ["C++", "Python", "Php"]
  },
  language: ["English", "Mandarin"],
  about: "I am a Junior Software Engineer and I love to learn more about technology. I graduated with a Computer Information System major from Baruch with main focuses on the system design, then went to Flatiron to improve my skill with React.js, Ruby on Rails, and JavaScript. Developing apps and figuring out the logic is fascinating. ",
}

export const portfolios = {
  feeders: {
    language: ['React', 'Ruby on Rails', 'Redux'],
    image: FeedersScreen
  },

  flatironMovie: {
    language: ['React', 'Ruby on Rails'],
    image: FlatironMovieScreen
  },

  marketTrackingApp:{
    language: ['JavaScript', 'Ruby on Rails'],
    image: MarketTrackingAppScreen
  }
}
