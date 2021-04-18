import ReactDOM from 'react-dom';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.dark.css'
require("dotenv").config();

ReactDOM.render(Router(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
