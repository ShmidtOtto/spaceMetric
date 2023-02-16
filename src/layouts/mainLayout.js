import { Outlet } from 'react-router-dom';
import Header from '../components/headerComponent/headerComponent.js';
import Footer from '../components/footerComponent/footerComponent.js';

function MainLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;