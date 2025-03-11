//
import { useNavigate } from "react-router-dom";
//Icons
import { GrFormNextLink } from "react-icons/gr";
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
//Styles
import '../styles/views/quickView.css';

function QuickView() {
    const navigate = useNavigate();

    return(
        <>
        
        <main className='main-quickView'>
            <section className="menu-container-quickView">
                <div className="menu-header-quickView">
                                <img src="images/logos/BSitesLogo00.webp" alt="Logo" />
                                <h1>B-Sites</h1>
                            </div>

                            <div className="menu-body-quickView">
                                <div className="opt-menu-quickView" onClick={() => navigate('/')}>
                                    <p>Sitio Web</p>
                                    <GrFormNextLink />
                                </div>
                                <div className="opt-menu-quickView" onClick={() => window.open('https://wa.me/+523841177360')}>
                                    <p>Contacto</p>
                                    <GrFormNextLink />
                                </div>
                            </div>

                            <div className="menu-footer-quickView">
                                <a href='#facebook' onClick={() => window.open("https://www.facebook.com/profile.php?id=61569565533751")}>
                                <FaFacebookSquare size={28} className='facebook-icon'/>                        
                                </a>
                                <a href='#instagram' onClick={() => window.open('https://www.instagram.com/b.sites.company/')}>
                                    <FaInstagram size={28} className='instagram-icon'/>                        
                                </a>
                            </div>
            </section>
            
        </main>

        </>
    );
}

export default QuickView;