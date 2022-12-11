import React from "react";
import Router from "./components/Router.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import itemReducer from "./components/itemReducer.js";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
    key: 'root',
    storage,
};

let combinedReducers = combineReducers({
    knives: itemReducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

const knives = 
    [{"id": 1, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Кухонный нож SQ01-B", "price": 850, "mark": "Новинка"},
            {"id": 2, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Кухонный нож SQ02-B", "price": 860, "mark": "Новинка"},
            {"id": 3, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Кухонный нож SQ03-B", "price": 870, "mark": "Новинка"},
            {"id": 4, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Кухонный нож SQ04-B", "price": 880, "mark": "Новинка"},
            {"id": 5, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Кухонный нож SQ05-B", "price": 890, "mark": "Новинка"},
            {"id": 6, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Кухонный нож SQ06-B", "price": 900, "mark": ""},
            {"id": 7, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Кухонный нож SQ07-B", "price": 910, "mark": ""},
            {"id": 8, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Кухонный нож SQ08-B", "price": 920, "mark": ""},
            {"id": 9, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Кухонный нож SQ09-B", "price": 930, "mark": ""},
            {"id": 10, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Кухонный нож SQ10-B", "price": 940, "mark": ""},
            {"id": 11, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Кухонный нож SQ11-B", "price": 950, "mark": ""},
            {"id": 12, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Кухонный нож SQ12-B", "price": 960, "mark": ""},
            {"id": 13, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Кухонный нож SQ13-B", "price": 970, "mark": ""},
            {"id": 14, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Кухонный нож SQ14-B", "price": 980, "mark": ""},
            {"id": 15, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Кухонный нож SQ15-B", "price": 990, "mark": ""},
        {"id": 16, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Складной нож GH16-S", "price": 990, "mark": "Новинка"},
            {"id": 17, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож GH17-S", "price": 980, "mark": "Новинка"},
            {"id": 18, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Складной нож GH18-S", "price": 970, "mark": "Новинка"},
            {"id": 19, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож GH19-S", "price": 960, "mark": "Новинка"},
            {"id": 20, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Складной нож GH20-S", "price": 950, "mark": "Новинка"},
            {"id": 21, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож GH21-S", "price": 940, "mark": "Новинка"},
            {"id": 22, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Складной нож GH22-S", "price": 950, "mark": ""},
            {"id": 23, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож GH23-S", "price": 960, "mark": ""},
            {"id": 24, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Складной нож GH24-S", "price": 940, "mark": ""},
            {"id": 25, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож GH25-S", "price": 930, "mark": ""},
            {"id": 26, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Складной нож GH26-S", "price": 920, "mark": ""},
            {"id": 27, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож GH27-S", "price": 910, "mark": ""},
            {"id": 28, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Складной нож GH28-S", "price": 900, "mark": ""},
            {"id": 29, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Складной нож GH29-S", "price": 890, "mark": ""},
            {"id": 30, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Складной нож GH30-S", "price": 880, "mark": ""},
        {"id": 31, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Точилка для ножей JJ001-TUO-B", "price": 850, "mark": "Новинка"},
            {"id": 32, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Точилка для ножей JJ002-TUO-B", "price": 990, "mark": "Новинка"},
            {"id": 33, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Точилка для ножей JJ003-TUO-B", "price": 860, "mark": "Новинка"},
            {"id": 34, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Точилка для ножей JJ004-TUO-B", "price": 980, "mark": ""},
            {"id": 35, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Точилка для ножей JJ005-TUO-B", "price": 850, "mark": ""},
            {"id": 36, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Точилка для ножей JJ006-TUO-B", "price": 970, "mark": ""},
            {"id": 37, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Точилка для ножей JJ007-TUO-B", "price": 840, "mark": ""},
            {"id": 38, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Точилка для ножей JJ008-TUO-B", "price": 960, "mark": ""},
            {"id": 39, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Точилка для ножей JJ009-TUO-B", "price": 830, "mark": ""},
            {"id": 40, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Точилка для ножей JJ010-TUO-B", "price": 950, "mark": ""},
            {"id": 41, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Точилка для ножей JJ011-TUO-B", "price": 820, "mark": ""},
            {"id": 42, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Точилка для ножей JJ012-TUO-B", "price": 940, "mark": ""},
            {"id": 43, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Точилка для ножей JJ013-TUO-B", "price": 810, "mark": ""},
            {"id": 44, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Точилка для ножей JJ014-TUO-B", "price": 930, "mark": ""},
            {"id": 45, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Точилка для ножей JJ015-TUO-B", "price": 800, "mark": ""},
        {"id": 46, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Нож классного качества Knight light C651", "price": 880, "mark": "Новинка"},
            {"id": 47, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Нож классного качества Knight light C652", "price": 980, "mark": "Новинка"},
            {"id": 48, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Нож классного качества Knight light C653", "price": 890, "mark": "Новинка"},
            {"id": 49, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Нож классного качества Knight light C654", "price": 990, "mark": "Новинка"},
            {"id": 50, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Нож классного качества Knight light C655", "price": 900, "mark": "Новинка"},
            {"id": 51, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Нож классного качества Knight light C656", "price": 800, "mark": "Новинка"},
            {"id": 52, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Нож классного качества Knight light C657", "price": 810, "mark": "Новинка"},
            {"id": 53, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Нож классного качества Knight light C658", "price": 910, "mark": ""},
            {"id": 54, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Нож классного качества Knight light C659", "price": 820, "mark": ""},
            {"id": 55, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Нож классного качества Knight light C660", "price": 920, "mark": ""},
            {"id": 56, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Нож классного качества Knight light C661", "price": 830, "mark": ""},
            {"id": 57, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Нож классного качества Knight light C662", "price": 930, "mark": ""},
            {"id": 58, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Нож классного качества Knight light C663", "price": 840, "mark": ""},
            {"id": 59, "img": "https://i.postimg.cc/Vv3CYRcq/image-14.png", "name": "Нож классного качества Knight light C664", "price": 940, "mark": ""},
            {"id": 60, "img": "https://i.postimg.cc/3w0xG1wz/image-18.png", "name": "Нож классного качества Knight light C665", "price": 950, "mark": ""}
        ];
class App extends React.Component {
    state = {
        knives: "",
        kitchen: "",
        folding: "",
        sharpeners: "",
        accessories: ""
    };
    componentDidMount() {
        this.load();
    }
    load = () => {
        var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
        let sp = new URLSearchParams();
        sp.append('f', 'READ');
        sp.append('n', 'MALASHKO_REACT_SHOP');
        try {
            let response = await fetch(ajaxHandlerScript,{ method: 'post', body: sp });
            let data = await response.json();
            let dataItem = data.result;
            let obj = JSON.parse(dataItem);
            this.setState({knives: obj, kitchen: [...obj].splice(0, 15), folding: [...obj].splice(15, 15), sharpeners: [...obj].splice(30, 15), accessories: [...obj].splice(45)});
        }
        catch ( error ) {
            console.error(error);
        }
    }
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Router knives={this.state.knives} kitchen={this.state.kitchen} folding={this.state.folding} sharpeners={this.state.sharpeners} accessories={this.state.accessories}></Router>
                </BrowserRouter>
                </PersistGate>
            </Provider>
        )
    };
};

export default App;
