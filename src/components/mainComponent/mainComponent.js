import "./mainComponent.css";
import SideBar from '../sideBarComponent/sideBarComponent.js';
import Content from '../contentComponent/contentComponent.js';

function Main(props) {
    return (
        <div className="row">
            <div className='col'>
                <SideBar/>
            </div>
            <div className='col'>
                <Content/>
            </div>
        </div>
    )
}

export default Main