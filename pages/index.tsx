import Head from "next/head";
import { CounterView } from '../components/app/counter/view/counter.view';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Custom App By Shium</title>
        <link rel="icon" href="/Full-Apple.png" />
      </Head>
      <main className="h-screen bg-slate-800">
         <CounterView /> 
        
      </main>
    </div>
  );
};

export default Home;
