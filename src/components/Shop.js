import React from "react";
import "./Shop.css";
import Item from "./Item.js";
//import CartBtn from "./CartBtn.js";

class Shop extends React.Component {
    state = {
        kitchen: this.props.knives.kitchen,
        folding: this.props.knives.folding,
        sharpeners: this.props.knives.sharpeners,
        accessories: this.props.knives.accessories,
        category: "kitchen",
        counter: 0,
        sorted: "all"
    };
    updateCurrent = (event) => {
        if (event.target.closest(".Shop__Nav__btn")) {
            if (event.target.closest(".Shop__Nav__btn").id === "kitchen") {
                this.setState({category: "kitchen"});
            };
            if (event.target.closest(".Shop__Nav__btn").id === "folding") {
                this.setState({category: "folding"});
            };
            if (event.target.closest(".Shop__Nav__btn").id === "sharpeners") {
                this.setState({category: "sharpeners"});
            };
            if (event.target.closest(".Shop__Nav__btn").id === "accessories") {
                this.setState({category: "accessories"});
            };
        }
    };
    sort = (event) => {
        if (event.target.id === "new") {
            this.setState({sorted: "new"});
        }
        if (event.target.id === "popular") {
            this.setState({sorted: "popular"});
        }
        if (event.target.id === "all") {
            this.setState({sorted: "all"});
        }
    };
    countPrice = (price) => {
        let newPrice = this.state.counter + price
        this.setState({counter: newPrice});
    };
    render() {
        return (
            <div>
                <header className="Shop__banner">
                    <div className="Shop__header">
                        <a href="tel:89811201117"><img src="https://svgshare.com/i/oHH.svg" alt="Позвонить"></img></a>
                        <img src="https://i.postimg.cc/D0bQc1Yj/logo.png" alt="Логотип"></img>
                        <div className="Shop__header__cart">
                            <img src="https://svgshare.com/i/oHS.svg" alt="Корзина"></img>
                            {this.state.counter !== 0 ? 
                                <p>{this.state.counter} р.</p>
                            : ""
                            }
                        </div>
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
                        <li className="Shop__Nav__btn" id="kitchen" onClick={this.updateCurrent}>
                            <img src="https://svgshare.com/i/oG5.svg" alt="Кухонные ножи"></img>
                            <p className={this.state.category === "kitchen" ? "active" : ""}>Кухонные ножи</p>
                        </li>
                        <li className="Shop__Nav__btn" id="folding" onClick={this.updateCurrent}>
                            <img src="https://svgshare.com/i/oH5.svg" alt="Складные ножи"></img>
                            <p className={this.state.category === "folding" ? "active" : ""}>Складные ножи</p>
                        </li>
                        <li className="Shop__Nav__btn" id="sharpeners" onClick={this.updateCurrent}>
                            <img src="https://svgshare.com/i/oH6.svg" alt="Точилки для ножей"></img>
                            <p className={this.state.category === "sharpeners" ? "active" : ""}>Точилки для ножей</p>
                        </li>
                        <li className="Shop__Nav__btn" id="accessories" onClick={this.updateCurrent}>
                            <img src="https://svgshare.com/i/oGQ.svg" alt="Аксессуары для ножей"></img>
                            <p className={this.state.category === "accessories" ? "active" : ""}>Аксессуары для кухни</p>
                        </li>
                    </ul>
                </nav>
                <section className="Shop__categories">
                    <ul>
                        <li onClick={this.sort} id="all" className={this.state.sorted === "all" ? "sort" : ""}>Все</li>
                        <li onClick={this.sort} id="new" className={this.state.sorted === "new" ? "sort" : ""}>Новинки</li>
                        <li onClick={this.sort} id="popular" className={this.state.sorted === "popular" ? "sort" : ""}>Популярное</li>
                    </ul>
                </section>
                <main className="Shop__content">
                    {this.state.category === "kitchen" ? 
                        this.state.kitchen.map(el => 
                            <Item key={el.id} item={el} countPrice={this.countPrice}></Item>
                        )
                    : ""}
                    {this.state.category === "folding" ? 
                        this.state.folding.map(el => 
                            <Item key={el.id} item={el} countPrice={this.countPrice}></Item>
                        )
                    : ""}
                    {this.state.category === "sharpeners" ? 
                        this.state.sharpeners.map(el => 
                            <Item key={el.id} item={el} countPrice={this.countPrice}></Item>
                        )
                    : ""}
                    {this.state.category === "accessories" ? 
                        this.state.accessories.map(el => 
                            <Item key={el.id} item={el} countPrice={this.countPrice}></Item>
                        )
                    : ""}
                </main>
                <footer className="Shop__footer">
                    <p>© 2022 Все права защищены и принадлежат правообладателям.</p>
                </footer>
            </div>
        );
    };
}

export default Shop;

