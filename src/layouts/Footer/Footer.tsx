import { Button, Image } from 'react-bootstrap'
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer-page">
            <div className="social-media-area container-fluid">
                <div className='social-media-slogan '>
                    <span>Bizi Takip Et</span>
                </div>
                <div className='social-media-icons'>
                    <Image src='assets/images/logos/social-media/facebook.svg'></Image>
                    <Image src='assets/images/logos/social-media/twitter.svg'></Image>
                    <Image src='assets/images/logos/social-media/youtube.svg'></Image>
                    <Image src='assets/images/logos/social-media/instagram.svg'></Image>
                    <Image src='assets/images/logos/social-media/tiktok.svg'></Image>
                </div>
            </div>

            <div className="footer-bottom container-fluid">
                <div className="footer-item-area">
                    <ul>
                        <div className='title'>Vizyonda</div>
                        <li>Lohusa</li>
                        <li>Rafadan Tayfa 4: Hayrimatör </li>
                        <li>Zavallılar</li>
                        <li>Kolpaçino 4 4'lük</li>
                    </ul>
                </div>
                <div className="footer-item-area">
                    <ul>
                        <div className='title'>Yakında</div>
                        <li>Bridget Jones'un Günlüğü</li>
                        <li>Rafadan Tayfa </li>
                        <li>Zavallılar</li>
                        <li>Bob Marley: One Love</li>
                    </ul>
                </div>
                <div className="footer-item-area">
                    <ul>
                        <div className='title'>Ayrıcalıklı Salonlar</div>
                        <li>Lohusa</li>
                        <li>Rafadan Tayfa </li>
                        <li>Zavallılar</li>
                        <li>Kolpaçino</li>
                    </ul>
                </div>
                <div className="footer-item-area">
                    <ul>
                        <div className='title'>Kurumsal</div>
                        <li>Hakkımızda</li>
                        <li>İnsan Kaynakları</li>
                        <li>İşlem Rehberi</li>
                        <li>Özel Etkinlik Talepleri</li>
                    </ul>

                    <ul>
                        <div className='title mt-6'>Yardım Merkezi</div>
                        <li>E-Bilet</li>
                        <li>İade İşlemleri</li>
                        <li>CGV MoviePass İade İşlemleri</li>
                        <li>CGV MoviePass Barkod Yükleme</li>
                        <li>Sıkça Sorulan Sorular</li>
                        <li>Yorum ve Öneriler</li>
                        <li>İletişim</li>
                    </ul>
                </div>
                <div className="footer-item-area">
                    <ul className='mobile-app'>
                        <li className='title'>Uygulamamızı İndirin</li>
                        <div>
                            <Button><Image src='assets/images/logos/store/google_play_3x.png'></Image></Button>
                        </div>

                        <div>
                            <Button><Image src='assets/images/logos/store/app_store_3x.png'></Image></Button>
                        </div>

                        <div className='advertisement-slogan'> <p> Reklam vermek için:</p></div>
                        <p>www.marsmedia.com.tr</p>
                    </ul>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}
