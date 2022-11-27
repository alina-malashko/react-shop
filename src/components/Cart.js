import React from "react";
import "./Cart.css";
import CartItem from "./CartItem.js";

class Cart extends React.Component {
    state = {
        knives: this.props.knives,
        totalPrice: 0,
    };
    delete = (id) => {
        let itemsList = [...this.state.knives];
        itemsList = itemsList.filter(item => item.id != id);
        this.setState({knives: itemsList});
    };
    changeQty = (qty, id) => {
        console.log(qty, id)
    }
    render() {
        return (
            <div>
                <header>
                    <div className="Cart__header">
                        <a href="tel:89811201117"><img src="https://svgshare.com/i/oHH.svg" alt="Позвонить"></img></a>
                        <img src="https://i.postimg.cc/D0bQc1Yj/logo.png" alt="Логотип"></img>
                    </div>
                </header>
                <main>
                    <h1 className="Cart__heading">Корзина</h1>
                    <div className="Cart__items-list">
                    <div></div>
                        <div>
                        {this.state.knives.map(el => 
                            <CartItem key={el.id} id={el.id} item={el} qty={2} delete={this.delete} changeQty={this.changeQty}></CartItem>
                        )}
                        </div>
                        <div className="Cart__items-list__price">
                            <p>К оплате:</p>
                            <p className="Cart__items-list__price__total">{this.state.totalPrice} р.</p>
                        </div>
                    </div>
                    <div className="Cart__form">
                        <p className="Cart__form__heading">Для подтверждения заказа - введите ваши данные и мы перезвоним вам</p>
                        <div className="Cart__form__content">
                            <form>
                                <div className="Cart__form__content__input">
                                    <input type="text" defaultValue="" placeholder="Имя Фамилия"></input>
                                </div>
                                <div className="Cart__form__content__input">
                                    <input type="tel" defaultValue="" placeholder="+7(___)___-__-__"></input>
                                </div>
                                <div className="Cart__form__content__input">
                                    <input type="email" defaultValue="" placeholder="Ваша почта"></input>
                                </div>
                            </form>
                            <div className="Cart__form__confirm">
                                <p>Нажимая «Отправить форму», подтверждаю, что я ознакомлен с условиями <a href="#">Публичного договора оферты</a> и <a href="#">Политикой конфиденциальности</a></p>
                                <input type="button" value="ОТПРАВИТЬ ФОРМУ"></input>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="Cart__footer">
                    <p>© 2022 Все права защищены и принадлежат правообладателям.</p>
                </footer>
            </div>
        );
    };
}

export default Cart;