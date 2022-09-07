import { GetServerSideProps } from 'next';
import Navbar2 from '../components/Navbar2'
import Link from 'next/link';
export const getServerSideProps: GetServerSideProps = async (context) => {
  var id = context.query["id"];
  const url = "http://localhost:3200/course/?id=" + id;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id: id}),
  })
  const data = await res.json();
  return {
    props: {datas: data, id: id},
  };
};

export default function PostPage({datas,id}) {
  
  return (
    <>
    
      <Navbar2 />
      <h1>Post: {id}</h1>
      <h1>Description: {datas.description}</h1>
      <h1><a href={datas.link}> Youtube Link </a>  </h1>
      <ul>
      </ul>
    </>
  )
}