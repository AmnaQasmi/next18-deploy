'use client'
//src/store/providers.js
import store from "./store";
import { Toaster } from 'react-hot-toast';


const { Provider } = require("react-redux");

export function Providers ({children}){
    return <Provider store={store}>
      <Toaster />
    {children}
  </Provider>
}