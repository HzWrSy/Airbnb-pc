// import App from '@/App'
import App from './App'
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import store from "@/store";
import '@/style/reset.css'
const  root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Provider store={store}>
        <App/>
        </Provider>
)