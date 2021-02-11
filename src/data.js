import FeedersScreen from './images/portfolios/FeedersScreen.png';
import FlatironMovieScreen from './images/portfolios/FlatironMovieScreen.png';
import MarketTrackingAppScreen from './images/portfolios/MarketTrackingAppScreen.png';

export const data = {
  firstName: "Yunhao",
  lastName: "Gao",
  nickName: "Eddy",
  programmingLanguage: {
    primary: ["JavaScript", "React.js", "Redux.js"],
    others: ["MVC", "Python", "Php", "SQL", "FireBase", "NoSQL", "PostSQL"]
  },
  language: ["English", "Mandarin"],
  about: "I am a Junior Software Engineer and I love to learn more about technology. I graduated with a Computer Information System major from Baruch with main focuses on the system design, then went to Flatiron to improve my skill with React.js, Ruby on Rails, and JavaScript. Developing apps and figuring out the logic is fascinating. ",
}

export const portfolios = {
  feeders: {
    language: ['React', 'Ruby on Rails', 'Redux'],
    github: {
      frontEnd: 'https://github.com/510891328/feeders',
      backEnd: 'https://github.com/510891328/feeders-back-end'
    },
    demo: 'https://www.youtube.com/watch?v=4GbD2IQmzOY&t=136s',
    site: 'https://stoic-hermann-9bd556.netlify.app/',
    image: FeedersScreen
  },

  flatironMovie: {
    language: ['React', 'Ruby on Rails'],
    github: {
      frontEnd: 'https://github.com/510891328/Market-Tracking-App-Front-End',
      backEnd: 'https://github.com/510891328/Market-Tracking-App-API'
    },
    demo: 'https://www.youtube.com/watch?v=jzcnAkTKhgc&feature=youtu.be',
    site: 'https://5fd2e90ae0b60e00076cf2a1--gifted-yonath-be1d3c.netlify.app/',
    image: FlatironMovieScreen
  },

  marketTrackingApp:{
    language: ['JavaScript', 'Ruby on Rails'],
    github: {
      frontEnd: 'https://github.com/510891328/Flatiron-Movie',
      backEnd: 'https://github.com/510891328/Flatiron-Movie-Back-End'
    },
    demo: 'https://www.youtube.com/watch?v=SHVDmjdvG-8&feature=youtu.be',
    image: MarketTrackingAppScreen
  }
}
