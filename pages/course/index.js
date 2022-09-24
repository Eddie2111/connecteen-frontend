import backend from '../../pages/api/backend';
import Navbar2 from '../components/Navbar2'
import Head from 'next/head';
//import Link from 'next/link';
import styled from 'styled-components';

export async function getServerSideProps(context) {
  var id = context.query["id"];
  const url = backend+"course/?id=" + id;

  const res = await fetch(url, {
      method: 'POST',
      headers: {  'Content-Type': 'application/json' },
      body: JSON.stringify({id: id}),
  });
  const data = await res.json();

  return {
    props: {
      datas: data, 
      id: id
    },
  };
};




export default function course({datas,id}) {

  return (
    <>
      <Head>
        <title>Connecteen | {datas.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <Navbar2/>
    <br/>
    <br/>
    <div className='HeadingContainer'>
      <div className='flexbox'>
      <div className='flexItem1'>x</div>
      <div className='flexItem2'>x</div>
      </div>
    </div>
      
      

    

    <div className="container">
      <div className="row">
        <div className="col-md-12">

          <p>{datas.description}</p>
          
        </div>
      </div>
    </div>
    </>
  )
}

