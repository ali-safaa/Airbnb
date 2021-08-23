import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
function Search() {
    const router = useRouter();
    const { location, startDate, endDate, numberGuest } = router.query;
    const dateStart = format(new Date(),"yyyy-MMMM-dd");
    const dateEnd = format(new Date(), "yyyy-MMMM-dd");
    const range = `${dateStart} - ${dateEnd} `;
    return (
        <div>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
       </Head>
          <Header placeholder={`${location} | ${range} | ${numberGuest}`}/>
          <main className="flex">
             <section className="flex-grow pt-10 px-6 ">
                 <p className="text-xs sm:text-sm">{range} - for {numberGuest} of guest</p>
                 <h1 className="text-lg sm:text-xl font-bold mb-2">stays in {location}</h1>
                 <div className="hidden items-center mb-5 text-gray-500 whitespace-nowrap space-x-2 sm:inline-flex">
                     <p className="button">cancel flexbilty</p>
                     <p className="button">type of place</p>
                     <p className="button">prices</p>
                     <p className="button">rooms and beds</p>
                 </div>
                 <div className="flex flex-col">
                 <InfoCard 
                 image="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 location="canada"
                 title="nature"
                 bio="the best place"
                 star="4.5"
                 total="200.99"
                 />
                 <InfoCard 
                 image="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 location="canada"
                 title="nature"
                 bio="the best place"
                 star="4.5"
                 total="200.99"
                 />
                 <InfoCard 
                 image="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 location="canada"
                 title="nature"
                 bio="the best place"
                 star="4.5"
                 total="200.99"
                 />
                 <InfoCard 
                 image="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 location="canada"
                 title="nature"
                 bio="the best place"
                 star="4.5"
                 total="200.99"
                 />
                 <InfoCard 
                 image="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 title="nature"
                 location="canada"
                 bio="the best place"
                 star="4.5"
                 total="200.99"
                 />
                 </div>
             </section>
          </main>
          <Footer />
        </div>
    )
}

export default Search
