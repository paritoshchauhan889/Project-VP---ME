import React from 'react'
import Layout from './Components/Layout/Layout'
import Account from './Components/Account/Account'
import './Home.css'

const Home = () => {
  return (
    <Layout title={'Hello'}>
<div className='home'>
  <div className='d-flex'>
    <div className='col-md-8'>
    <button class="group inline-flex h-12 px-6 flex-col justify-center items-center gap-2 flex-shrink-0 rounded-full border-2 border-neutral-dark-100 shadow-button transition-all duration-200 bg-main-blue 
        disabled:transform-none disabled:shadow-none disabled:border-2 disabled:border-black disabled:border-opacity-[24%] disabled:rounded-full disabled:bg-black disabled:bg-opacity-[24%] disabled:text-opacity-[30]
        active:brightness-[80%]
        hover:shadow-none hover:transform hover:-translate-x-[4px] hover:translate-y-[4px]
          undefined"><div class="flex items-center gap-2 "><span class="font-poppins font-semibold text-sm max-lg:text-[16px] text-white">Get started</span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="6 0 13 24"><path d="m9 18 6-6-6-6"></path></svg></div></button>
    </div>
    <div className='col-md-4 p-4'>
    <Account/>

    </div>
  </div>
</div>

        
    </Layout>
  )
}

export default Home
