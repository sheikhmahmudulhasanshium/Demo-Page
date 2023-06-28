import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "mobx-react";
import { CounterController } from '../components/app/counter/controller/counter.controller';
import Footer from "../components/app/counter/view/Footer";
import Product_Card from "../components/app/counter/view/Product_Card";
import Navbar from "../components/app/counter/view/Navbar";

const counterController = new CounterController();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider counterController={counterController} >
      <div className="">
          <Navbar/>
          <div className="flex flex-col col-span-12 bg-white lg:col-span-9 ">
              <Component {...pageProps} />
               
          </div>
          
          
      </div>
      
    </Provider>
  );
}

export default MyApp;
