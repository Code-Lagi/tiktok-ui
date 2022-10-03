import Header from '../components/Header';
import SideBar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
