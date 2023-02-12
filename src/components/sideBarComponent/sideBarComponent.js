import  './sideBarComponent.css';
import SideBarButton from './sideBarButtons/sideBarButton.js';

function SideBar() {
    return (
        <div className='container'>
            <div className="col">
                <SideBarButton/>
                <SideBarButton/>
                <SideBarButton/>
                <SideBarButton/>
                <SideBarButton/>
                <SideBarButton/>
                <SideBarButton/>
                <SideBarButton/>
            </div>
        </div>
    )
}

export default SideBar