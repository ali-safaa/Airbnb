import Head from 'next/head'
import Header from "../components/Header"
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>

      <Header/>
      <Banner/>
      <main className="max-w-7xl mx-auto sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <SmallCard image="https://images.pexels.com/photos/9070073/pexels-photo-9070073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" hour="2 hours" local="london"/>
          <SmallCard image="https://images.pexels.com/photos/9070073/pexels-photo-9070073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" hour="2 hours" local="london"/>
          <SmallCard image="https://images.pexels.com/photos/9070073/pexels-photo-9070073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" hour="2 hours" local="london"/>
          <SmallCard image="https://images.pexels.com/photos/9070073/pexels-photo-9070073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" hour="2 hours" local="london"/>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold py-8">live any where</h2>
          <div className="flex space-x-3 overflow-scroll p-3 ml-3">
          <MediumCard image="https://images.pexels.com/photos/4799967/pexels-photo-4799967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="nature"/>
          <MediumCard image="https://images.pexels.com/photos/4799967/pexels-photo-4799967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="sea"/>
          <MediumCard image="https://images.pexels.com/photos/4799967/pexels-photo-4799967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="muntain"/>
          <MediumCard image="https://images.pexels.com/photos/4799967/pexels-photo-4799967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="wood"/>
          </div>
        </section>
        <LargeCard 
        image="https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="the best place"
        bio="wichlist by airbnb"
        buttonText="git inspire"
        />
      </main>
      <Footer />
    </div>
  )
}
