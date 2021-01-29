import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';


const  Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Future Lithics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {props.children}
       
      <Footer />

    </div>
  );
}

export default Layout;