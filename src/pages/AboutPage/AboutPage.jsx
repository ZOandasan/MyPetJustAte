import "./About.css";

export default function AboutPage(){
    return (
      <div>
        <h1>Meet the Team</h1>
        <div className="profile">
          <div className="title">
            <a href="https://www.linkedin.com/in/carlos-shows/">
              <img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="linkedin"></img>
            </a>
            <div className='name'>Carlos Shows</div>
          </div>
          <div className='description'>Content Strategist / UX Designer</div>
        </div>

        <div className="profile">
          <div  className="profile-image">
            <a href="https://www.linkedin.com/in/jimmy-liu-a9169310/">
              <img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="linkedin"
              ></img>
            </a>
          </div>
          <div className="profile-info">
            <h4>Jimmy Liu</h4>
            <span>Content Strategist / UX Designer</span>
          </div>
        </div>

        <div className="profile">
          <div  className="profile-image">
            <a href="https://www.linkedin.com/in/josiahwu/">
              <img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="linkedin"
              ></img>
            </a>
          </div>
          <div className="profile-info">
            <h4>Josiah Wu</h4>
            <span>Content Strategist / UX Designer</span>
          </div>
        </div>

        
        <div className="profile">
          <div  className="profile-image">
            <a href="https://www.linkedin.com/in/zachary-oandasan/">
              <img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="linkedin"
              ></img>
            </a>
          </div>
          <div className="profile-info">
            <h4>Natalie McCook</h4>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <div className="profile">
          <div  className="profile-image">
            <a href="https://www.linkedin.com/in/reibp">
              <img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="linkedin"
              ></img>
            </a>
          </div>
          <div className="profile-info">
            <h4>Rei Pagdilao</h4>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <div className="profile">
          <div  className="profile-image">
            <a href="https://www.linkedin.com/in/zachary-oandasan/">
              <img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="linkedin"
              ></img>
            </a>
          </div>
          <div className="profile-info">
            <h4>Zach Oandasan</h4>
            <span>Full Stack Developer</span>
          </div>
        </div>

      </div>
    )
}