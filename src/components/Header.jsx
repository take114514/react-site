import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () =>{
    return (
        <header className = "main-cover" style = {{backgroundImage:`url(${CoverImage})`}}>
            <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className="title-text">武井 龍八</h1>
            <h2 className="title-text">-RYUYA TAKEI-</h2>
            <h3 className="title-text">webエンジニア</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href = "https://twitter.com/ryutake459">
                <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href = "https://github.com/take114514">
                <FaGithub color="white" size="2rem" />
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};