import Head           from 'next/head'
import Navbar2        from './components/Navbar2'
import { useRouter }  from 'next/router'
import Banner         from './components/Banner'
import { format }     from 'url'
import Image          from 'next/image'
import { motion }     from "framer-motion"

let counter = 0;
export async function getServerSideProps() {
  counter++
  return { props: { initialPropsCounter: counter } }
}
export default function Home({  }) {
  const router = useRouter()
  const { pathname, query } = router
  const reload = () => {
    router.push(format({ pathname, query }))
  }

  const incrementCounter = () => {
    const currentCounter = query.counter ? parseInt(query.counter) : 0
    const href = `/?counter=${currentCounter + 1}`

    router.push(href, href, { shallow: true })
  }
  return (
    <>
    <Banner/>
    <Navbar2/>
    
    
      <Head>
        <title>Connecteen | Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 body2 ">
      <section className='indexContainer'>
          <div className="flexbox">
              <div className="flexItem1">
                  <h1 className="headingH1"> Connecteen </h1>
                    <p className="p-3 font-mono text-lg  rounded-md">
                      Get started by joining the most advanced community of Banlgadesh
                    </p>
              </div>
              <div className="flexItem2">
                  
                  <Image src="/wallCard1.png" width="450" height="450" />
              </div>
          </div>
      </section>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen py-2 body3 ">
      <section className='indexContainer'>
          <div className="flexbox">
              <div className="flexItem1">
                  ekhane lekha pora thakbe
              </div>
              <div className="flexItem2">
                  get some vector image here
              </div>
          </div>
      </section>
      </div>
      

      

      <div className="flex flex-col items-center justify-center min-h-screen py-2 body1">
      <section className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold" >
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            CONNECTEEN
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            Get started by joining the most advanced community of Banlgadesh
          </code>
        </p>


      </section>
    </div>
    
    </>
  )
}

/*
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a href="https://nextjs.org/docs"className="p-6 mt-6 text-left border card w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border card w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="p-6 mt-6 text-left border card w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border card w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        */


