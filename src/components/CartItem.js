import React from "react";
import "./CartItem.css";

class CartItem extends React.Component {
    state = {
        item: this.props.item,
        qty: this.props.qty
    };
    delete = (event) => {
        this.props.delete(event.target.id);
    };
    changeQty = (event) => {
        let value = event.target.value;
        if (event.target.value === "") {
            value = 0;
        }
        this.props.changeQty(value, event.target.id);
    };
    render() {
        return (
            <div className="CartItem">
                <img src={this.state.item.img} alt={this.state.item.name} title={this.state.item.name}></img>
                <p>{this.state.item.name}</p>
                <input type="text" defaultValue={this.state.qty} onInput={this.changeQty} id={this.state.item.id}></input>
                <p>{this.state.item.price} р.</p>
                <img src="https://svgshare.com/i/oMR.svg" alt="Удалить" title="Удалить" onClick={this.delete} id={this.state.item.id}></img>
            </div>
        );
    };
};

export default CartItem;