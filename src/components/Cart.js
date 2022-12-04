import React from "react";
import "./Cart.css";
import CartItem from "./CartItem.js";
import { NavLink } from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {connect} from "react-redux";

class intCart extends React.Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputPhone = React.createRef();
        this.inputEmail = React.createRef();
    };
    state = {
        knives: this.props.knives,
        totalPrice: this.props.totalPrice,
        //clickedProducts: localStorage.hasOwnProperty("clickedProductsDataArray") ? JSON.parse(localStorage.getItem("clickedProductsDataArray")) : {counter: 0},
        //totalPrice: localStorage.hasOwnProperty("clickedProductsDataArray") ? JSON.parse(localStorage.getItem("clickedProductsDataArray")).counter : 0,
        content: "cart",
        orderInfo: ""
    };
    delete = (item) => {
        this.props.dispatch({type: "DELETE_ITEM", data: item});
    };
    changeQty = (item) => {
        console.log(item);
        //this.props.dispatch({type: "CHANGE_QTY", data: })
    };
    sendInfoToServer = () => {
        let info = {
            name: this.inputName.current.value,
            phone: this.inputPhone.current.value,
            email: this.inputEmail.current.value,
            items: this.state.knives,
        }
        console.log(info);
        this.setState({orderInfo: info});
        this.setState({content: "thankyou"});
    };
    render() {
        return (
            <div>
                <header>
                    <div className="Cart__header">
                        <a href="tel:89811201117"><img src="https://svgshare.com/i/oHH.svg" alt="Позвонить"></img></a>
                        <NavLink to="/">
                            <img src="https://i.postimg.cc/D0bQc1Yj/logo.png" alt="Логотип"></img>
                        </NavLink>
                    </div>
                </header>
                <main>
                    {this.state.content === "loader" ?
                        <p>Loading...</p>
                    : ""}
                    {this.state.content === "cart" ?
                    <div>
                    <h1 className="Cart__heading">Корзина</h1>
                    <div className="Cart__items-list">

                        <TransitionGroup>
                            {this.props.knives.map(el => 
                                <CSSTransition key={el.id} timeout={200} classNames="CartItem">
                                    <CartItem key={el.id} id={el.id} item={el} delete={this.delete} changeQty={this.changeQty}></CartItem>
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    
                        <div className="Cart__items-list__price">
                            <p>К оплате:</p>
                            <p className="Cart__items-list__price__total">{this.props.totalPrice} р.</p>
                        </div>
                    </div>
                    <div className="Cart__form">
                        <p className="Cart__form__heading">Для подтверждения заказа - введите ваши данные и мы перезвоним вам</p>
                        <div className="Cart__form__content">
                            <form>
                                <div className="Cart__form__content__input">
                                    <input type="text" defaultValue="" placeholder="Имя Фамилия" ref={this.inputName}></input>
                                </div>
                                <div className="Cart__form__content__input">
                                    <input type="tel" defaultValue="" placeholder="+7(___)___-__-__" ref={this.inputPhone}></input>
                                </div>
                                <div className="Cart__form__content__input">
                                    <input type="email" defaultValue="" placeholder="Ваша почта" ref={this.inputEmail}></input>
                                </div>
                            </form>
                            <div className="Cart__form__confirm">
                                <p>Нажимая «Отправить форму», подтверждаю, что я ознакомлен с условиями <a href="#">Публичного договора оферты</a> и <a href="#">Политикой конфиденциальности</a></p>
                                <input type="button" value="ОТПРАВИТЬ ФОРМУ" onClick={this.sendInfoToServer}></input>
                            </div>
                        </div>
                    </div>
                    </div>
                    : ""}
                    {this.state.content === "thankyou" ?
                    <div>
                        <p>Благодарим за заказ,{this.state.orderInfo.name}!</p>
                        <p>С вами свяжутся по номеру {this.state.orderInfo.phone}</p>
                        <p>Детали заказа отправлены на {this.state.orderInfo.email}</p>
                        <p>В Вашем заказе:</p>
                            {this.state.orderInfo.items.map(el => 
                                <ul key={el.id}>
                                    <li>
                                        {el.name}
                                    </li>
                                    <li>
                                        {el.price} p.
                                    </li>
                                </ul>
                            )}
                    </div>
                    : ""}
                </main>
                <footer className="Cart__footer">
                    <p>© 2022 Все права защищены и принадлежат правообладателям.</p>
                </footer>
            </div>
        );
    };
}

const mapStateToProps = function(state) {
    return {
        knives: state.knives.items,
        totalPrice: state.knives.totalPrice
    };
};

const Cart = connect(mapStateToProps)(intCart);

export default Cart;