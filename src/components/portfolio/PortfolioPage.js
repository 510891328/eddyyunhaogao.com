import { portfolios } from '../../data.js';
import Project from './Project';
// import FeedersScreen from '../../images/portfolios/FeedersScreen.png';
// import FlatironMovieScreen from '../../images/portfolios/FlatironMovieScreen.png';
// import MarketTrackingAppScreen from '../../images/portfolios/MarketTrackingAppScreen.png';

const renderProjects = () => {
    const projects = [];
    for(const project in portfolios){
      projects.push(<Project project={portfolios[project]}/>)
    }
    return projects;
}

function Portfilio() {
  return (
    <div className="portfolio-holder">
      {renderProjects()}
    </div>
  )
}

export default Portfilio;
