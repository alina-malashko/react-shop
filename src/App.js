import React from "react";
import Router from "./components/Router.js";
import { BrowserRouter } from "react-router-dom";

const knives = 
    [{"id": 1, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ01-B", "price": 850, "mark": "Новинка"},
            {"id": 2, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ02-B", "price": 860, "mark": ""},
            {"id": 3, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ03-B", "price": 870, "mark": ""},
            {"id": 4, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ04-B", "price": 880, "mark": ""},
    {"id": 5, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ05-B", "price": 850, "mark": "Новинка"},
            {"id": 6, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ06-B", "price": 860, "mark": ""},
            {"id": 7, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ07-B", "price": 870, "mark": ""},
            {"id": 8, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ08-B", "price": 880, "mark": ""},
    {"id": 9, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ09-B", "price": 850, "mark": "Новинка"},
                {"id": 10, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ10-B", "price": 860, "mark": ""},
                {"id": 11, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ11-B", "price": 870, "mark": ""},
                {"id": 12, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ12-B", "price": 880, "mark": ""},
    {"id": 13, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ13-B", "price": 850, "mark": "Новинка"},
                {"id": 14, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ14-B", "price": 860, "mark": ""},
                {"id": 15, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ15-B", "price": 870, "mark": ""},
                {"id": 16, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ16-B", "price": 880, "mark": ""},
                {"id": 17, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ17-B", "price": 880, "mark": ""},
                {"id": 18, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ18-B", "price": 880, "mark": ""},
                {"id": 19, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ19-B", "price": 880, "mark": ""},
                {"id": 20, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож SQ20-B", "price": 880, "mark": ""}];
class App extends React.Component {
    state = {
        knives: knives,
        kitchen: [...knives].splice(0, 4),
        folding: [...knives].splice(4, 4),
        sharpeners: [...knives].splice(8, 4),
        accessories: [...knives].splice(12, 8)
    };
    render() {
        return (
            <BrowserRouter>
                <Router knives={this.state.knives} kitchen={this.state.kitchen} folding={this.state.folding} sharpeners={this.state.sharpeners} accessories={this.state.accessories}></Router>
            </BrowserRouter>
        )
    };
};

export default App;
