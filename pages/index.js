import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
      <Head>
        <title>home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <Header />
      <Banner />
      <main className="mx-auto sm:px-16">
        <section>
          <h2 className="text-black font-semibold pt-3 pl-5">Explore Nearby</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6">
            <SmallCard
              image="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              hour="45-min drive"
              local="France"
            />
            <SmallCard
              image="https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              hour="1-hour drive"
              local="Turkey"
            />
            <SmallCard
              image="https://images.pexels.com/photos/1427578/pexels-photo-1427578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              hour="2 hour drive"
              local="London"
            />
            <SmallCard
              image="https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              hour="5 hour drive"
              local="Canada"
            />
          </div>
        </section>
        <section>
          <h2 className="pl-5 pt-8 font-semibold">live any where</h2>
          <div className="flex space-x-3 overflow-scroll p-3 ml-3">
            <MediumCard
              image="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              title="nature"
            />
            <MediumCard
              image="https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              title="sea"
            />
            <MediumCard
              image="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500s"
              title="muntain"
            />
            <MediumCard
              image="https://images.pexels.com/photos/6272174/pexels-photo-6272174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="wood"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
