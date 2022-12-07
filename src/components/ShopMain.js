import React from "react";
import "./Shop.css";
import Item from "./Item.js";
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import CartBtn from "./CartBtn";

class intShopMain extends React.Component {
    state = {
        knives: this.props.knives,
        sortedKnives: this.props.knives,
        sorted: "all",
        clickedProducts: this.props.clickedProducts
    };
    sort = (event) => {
        let allKnives = [...this.state.knives];
        if (event.target.id === "new") {
            let option = "Новинка";
            let sortedKnives = allKnives.filter(item => item.mark === option);
            this.setState({sorted: "new", sortedKnives: sortedKnives});
        }
        if (event.target.id === "all") {
            this.setState({sorted: "all", sortedKnives: allKnives});
        }
    };
    rememberClicked = (id, counter) => {
        let clickedObj = {...this.state.clickedProducts};
        clickedObj["id"] = id;
        clickedObj["counter"] = counter;
        this.props.dispatch({type: "REMEMBER_CLICKED", data: clickedObj});
    };
    addInCart = (Item) => {
        this.props.dispatch({type: "ADD_ITEM", data: Item});
    };
    render() {
        return (
            <div className="wrapper">
                <header className="Shop__banner">
                    <div className="Shop__header">
                        <a href="tel:89811201117"><img src="https://svgshare.com/i/oHH.svg" alt="Позвонить"></img></a>
                        <NavLink to="/">
                            <img src="https://i.postimg.cc/D0bQc1Yj/logo.png" alt="Логотип"></img>
                        </NavLink>
                        <NavLink to="/cart">
                            <CartBtn></CartBtn>
                        </NavLink>
                    </div>
                    <div>
                        <h1 className="Shop__heading">
                            Исключительное качество без компромиссов
                        </h1>
                        <p className="Shop__subheading">
                            Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства
                        </p>
                    </div>
                </header>
                <nav>
                    <ul className="Shop__Nav">
                        <NavLink to="/kitchen">
                            <li className="Shop__Nav__btn" id="kitchen">
                                <img src="https://svgshare.com/i/oG5.svg" alt="Кухонные ножи"></img>
                                <p>Кухонные ножи</p>
                            </li>
                        </NavLink>
                        <NavLink to="/folding">
                            <li className="Shop__Nav__btn" id="folding">
                                <img src="https://svgshare.com/i/oH5.svg" alt="Складные ножи"></img>
                                <p>Складные ножи</p>
                            </li>
                        </NavLink>
                        <NavLink to="/sharpeners">
                            <li className="Shop__Nav__btn" id="sharpeners">
                                <img src="https://svgshare.com/i/oH6.svg" alt="Точилки для ножей"></img>
                                <p>Точилки для ножей</p>
                            </li>
                        </NavLink>
                        <NavLink to="/accessories">
                            <li className="Shop__Nav__btn" id="accessories">
                                <img src="https://svgshare.com/i/oGQ.svg" alt="Аксессуары для ножей"></img>
                                <p>Аксессуары для кухни</p>
                            </li>
                        </NavLink>
                    </ul>
                </nav>
                <section className="Shop__categories">
                    <ul>
                        <li onClick={this.sort} id="all" className={this.state.sorted === "all" ? "sort" : ""}>Все</li>
                        <li onClick={this.sort} id="new" className={this.state.sorted === "new" ? "sort" : ""}>Новинки</li>
                    </ul>
                </section>
                <main className="Shop__content">
                    {this.state.sortedKnives.map(el => {
                        let newId = el.id.toString();
                        if (this.props.clickedProducts.hasOwnProperty(newId)) {
                            return <Item key={el.id} item={el} counter={this.props.clickedProducts[newId]} clicked={true} countPrice={this.countPrice} rememberClicked={this.rememberClicked} addInCart={this.addInCart}></Item>
                        } else {
                            return <Item key={el.id} item={el} counter={0} clicked={false} countPrice={this.countPrice} rememberClicked={this.rememberClicked} addInCart={this.addInCart}></Item>
                        }
                    })}
                </main>
                <footer className="Shop__footer">
                    <p>© 2022 Все права защищены и принадлежат правообладателям.</p>
                </footer>
            </div>
        );
    };
}

const mapStateToProps = function(state) {
    return {
        clickedProducts: state.knives.clickedProducts,
    };
};

const ShopMain = connect(mapStateToProps)(intShopMain);

export default ShopMain;