import React from 'react'
import footer from '../assets/img/footer logo.png'
import phone from '../assets/img/phone footer.png'
import inst from '../assets/img/inst.png'
import mail from '../assets/img/mail.png'

export default function Footer() {
  return (
    <>
            <div className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__col">
                        <h3 className="footer__title">НАВИГАЦИЯ</h3>
                        <div className="footer__part">
                            <ul className="footer__menu">
                                <li>Кухни</li>
                                <li>Спальни</li>
                                <li>Гостинные</li>
                            </ul>
                            <ul className="footer__menu">
                                <li>Прихожие</li>
                                <li>Офисная мебель</li>
                                <li>Детская</li>
                            </ul>
                            <ul className="footer__menu">
                                <li>Шкафы</li>
                                <li>Матрасы</li>
                                <li>Мягкая мебель</li>
                            </ul>
                        </div>
                        <div className="footer__botton">
                            <p className="footer__text">Акция</p>
                            <p className="footer__text2">Новинки</p>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__content">
                            <img src={footer} alt=""/>
                            <p className="footer__text3">г. Анап, Анапское шоссе, <br/>
                                30 Ж/К Черное море
                            </p>
                            <div className="footer__a">
                                <div className="footer__col2">
                                    <img src={phone} alt=""/>
                                    <a href="#">+998 (97) 110 80 40</a>
                                </div>
                                <div className="footer__col2">
                                    <img src={inst} alt=""/>
                                    <a href="#">Twiter</a>
                                </div>
                                <div className="footer__col2">
                                    <img src={mail}alt=""/>
                                    <a href="#">mebel_loft_anapa@mail.ru</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
