import React from 'react'
import Header from '../Header/Header'
import {Helmet} from 'react-helmet'
import Footer from '../Footer/Footer'

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
  <meta charSet="UTF-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>
    <Header/>
   <main  style={{minHeight:'50vh'}}>
    {children}</main>
    <Footer/>
    </div>
  )
};

Layout.defaultProps ={
  title:'Vivek',
  description:'This is the a Stm conference website',
  keywords:'React, Node js, Mongodb, Express js',
  author:'Paritosh'
}

export default Layout