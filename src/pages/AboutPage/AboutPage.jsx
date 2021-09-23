import "./About.css";

export default function AboutPage(){
    return (
        <div className="about">
      <h1>Meet the Team</h1>
      <div>
        <p className="aboutP">
          Assigned to create a pet applicable application,  <u>Carlos</u>, <u>Jimmy</u>, <u>Josiah</u>, <u>Natalie</u>, <u>Rei</u> and <u>Zach</u> have all
          come together to design the MyPetJustAte App.
        </p>
      </div>
      <div className="about-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <br />
              <th>LinkedIn</th>
              <br />
              <th>Role</th>
              <br />
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className="name">Carlos Shows</td>
              <br />&nbsp;&nbsp;&nbsp;
              <td>
                <a href="https://www.linkedin.com/in/carlos-shows/">
                  <img className="linkedin"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
              </td>
              <br />&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Content Strategist / UX Designer</td>
              <br />
            </tr>
            
            <tr>
              <td className="name">Jimmy Liu</td>
              <br />&nbsp;&nbsp;&nbsp;
              <td>
                <a href="https://www.linkedin.com/in/jimmy-liu-a9169310/">
                  <img className="linkedin"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
              </td>
              <br />&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Content Strategist / UX Designer</td>
              <br />
            </tr>

            <tr>
              <td className="name">Josiah Wu</td>
              <br />&nbsp;&nbsp;&nbsp;
              <td>
                <a href="https://www.linkedin.com/in/josiahwu/">
                  <img className="linkedin"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
              </td>
              <br />&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Content Strategist / UX Designer</td>
              <br />
            </tr>
            
            <tr>
              <td className="name">Natalie McCook</td>
              <br />&nbsp;&nbsp;&nbsp;
              <td>
                <a href="https://www.linkedin.com/in/zachary-oandasan/">{/* Update this Link */}
                  <img className="linkedin"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
              </td>
              <br />&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Full Stack Developer</td>
              <br />
            </tr>

            <tr>
              <td className="name">Rei Pagdilao</td>
              <br />&nbsp;&nbsp;&nbsp;
              <td>
                <a href="https://www.linkedin.com/in/zachary-oandasan/">{/* Update this Link */}
                  <img className="linkedin"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
              </td>
              <br />&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Full Stack Developer</td>
              <br />
            </tr>

            <tr>
              <td className="name">Zachary Oandasan</td>
              <br />&nbsp;&nbsp;&nbsp;
              <td>
                <a href="https://www.linkedin.com/in/zachary-oandasan/">
                  <img className="linkedin"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
              </td>
              <br />&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Full Stack Developer</td>
              <br />
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    )
}