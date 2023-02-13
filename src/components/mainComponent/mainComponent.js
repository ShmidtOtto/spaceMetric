import "./mainComponent.css";
import SideBar from '../sideBarComponent/sideBarComponent.js';
import Content from '../contentComponent/contentComponent.js';

function Main(props) {
    return (
        <div className ="main">
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="content">
                <Content/>
            </div>
        </div>
    )
}

export default Main