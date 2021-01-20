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
  about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
