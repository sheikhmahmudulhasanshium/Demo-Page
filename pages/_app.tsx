import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "mobx-react";
import { CounterController } from '../components/app/counter/controller/counter.controller';
import Navbar from "../components/app/counter/view/Navbar";
import Footer from "../components/app/counter/view/Footer";
const counterController = new CounterController();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider counterController={counterController} >
      <div className="grid-cols-12 ">
          <Navbar/>
          <div className="flex flex-col col-span-12 bg-white lg:col-span-9 ">
              <Component {...pageProps} />
               
          </div>
          <Footer/>
      </div>
      
    </Provider>
  );
}

export default MyApp;
