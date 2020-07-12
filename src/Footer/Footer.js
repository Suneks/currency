import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (

            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">

                            <div className="flex-item">
                                <ul className="list-unstyled">
                                    <li><button className="butt" tooltip="Карта сайта">Карта сайта</button></li>
                                    <li><button className="butt" tooltip="Google Sitemap">Google Sitemap</button></li>
                                </ul>
                            </div>

                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><button className="butt" tooltip="Контакты">Контакты</button></li>
                                        <li><button className="butt" tooltip="Контакты">Гарантии</button></li>
                                        <li><button className="butt" tooltip="Контакты">О сервисе</button></li>
                                        <li><button className="butt" tooltip="Контакты">Условия возврата</button></li>
                                        <li><button className="butt" tooltip="Контакты">Соглашение о использовании сервиса</button></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="copyright-bar">
                    <div className="flex-container">
                        <div className="flex-item">
                            <ul className="link"></ul>
                        </div>
                    </div>
                </div>

            </footer>

        );
    }
}

export default Footer;
