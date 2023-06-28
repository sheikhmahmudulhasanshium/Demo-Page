import Head from "next/head";
//import { CounterView } from '../components/app/counter/view/counter.view';
//import Footer from "../components/app/counter/view/Footer";
import Footer from "../components/app/counter/view/Footer";
import Body from "./Page_Body";
const Home = () => {
  return (
    <div>
      <Head>
        <title>Custom App By Shium</title>
        <link rel="icon" href="/Full-Apple.png" className="rounded-full" />
      </Head>
      <main className=" bg-slate-800">
         {/**<CounterView />*/}
          
          <Body/>
          <Footer/>
      </main>
    </div>
  );
};

export default Home;
