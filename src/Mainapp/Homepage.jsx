import './Homepage.css'
import photo1 from '../asset/Group 46.png'
import photo2 from '../asset/moptro logo.png'
import homeicon from '../asset/homeicon.png'
import dashicon from '../asset/dashboardicon.png'
import { Link } from 'react-router-dom';

const Homepage = () =>{
    
    return(
        <div className="maincontain">
        <div className="contain">
            <div className="fp">
                <img src={photo1} alt="photo1" className="photo1" />
            </div>
            <div className="num">
                <img src={photo2} alt="photo2" className="photo2" />
                <h4>4</h4>
            </div>
            <div className="secondcontain">
                <div className="headinggg">
                    <h5>Employee Productivity Dashboard</h5>
                </div>
                    <div className="mc11">
                        <h5>Productivity on Monday</h5>
                        <h5 id='mc111'>4%</h5>
                    </div>
                        <p id='mc12'></p>
            
                    <div className="mc21">
                        <h5>Productivity on Tuesday</h5>
                        <h5 id='mc211'>92%</h5>
                    </div>
                        <p id='mc22'></p>
                
                    <div className="mc31">
                        <h5>Productivity on Wednesday</h5>
                        <h5 id='mc311'>122%</h5>
                    </div>
                        <p id='mc32'></p>
                
                    <div className="mc41">
                        <h5>Productivity on Thursday</h5>
                        <h5 id='mc411'>93%</h5>
                    </div>
                        <p id='mc42'></p>
            
                    <div className="mc51">
                        <h5>Productivity on Friday</h5>
                        <h5 id='mc511'>89%</h5>
                    </div>                  
                        <p id='mc52'></p>

                    <div className="mc61">
                        <h5>Productivity on Saturday</h5>
                        <h5 id='mc611'>98%</h5>
                    </div>                   
                        <p id='mc62'></p>
            </div>
            <div className="thirdcontain">
                <div className="home">
                <Link to="/Homepage">
                    <img src={homeicon} alt="" className="homeicon" />
                </Link>
                </div>
                <div className="dashboard">
                <Link to="/employee-list">
                    <img src={dashicon} alt="" className="dashicon"/>
                </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Homepage