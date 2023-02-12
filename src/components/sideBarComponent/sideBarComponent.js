import  './sideBarComponent.css';
import SideBarButton from './sideBarButtons/sideBarButton.js';

function SideBar() {
    return (
        <div className='sidebar__container'>
            <div>
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