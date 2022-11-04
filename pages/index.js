import Head           from 'next/head'
import Navbar3        from './components/Navbar3'
import { useRouter }  from 'next/router'
import Banner         from './components/Banner'
import { format }     from 'url'
import Image          from 'next/image'
import { motion }     from "framer-motion"
import CodeSnippet    from './components/CodeSnippet'
import SEO            from './components/SEO'
import Link           from 'next/link'    
let counter = 0;
const pStyle = {
  margin:"auto",
  padding:"auto"
}
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
  const data = process.env.backend;

  const incrementCounter = () => {
    const currentCounter = query.counter ? parseInt(query.counter) : 0
    const href = `/?counter=${currentCounter + 1}`

    router.push(href, href, { shallow: true })
  }
  return (
    <>
          <Head>
            <title>Connecteen | Welcome</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Connecteen is a educational community platform for teens." />
            <SEO />
            
        </Head>

    
    <Navbar3/>
    
    


      <div className="flex flex-col items-center justify-center min-h-screen py-2 body2 ">
      
      <section className='indexContainer'>
      <br/><br/>
          <div className="flexbox">
          <motion.div
                initial={{ y:300 ,opacity: 0 }}
                animate={{ y:0, opacity: 1 }}
                transition={{ duration: 1 }}>
              <div className="flexItem1">
                  <h1 className="headingH1"> Connecteen {data}</h1>
                    <p className="p-3 font-mono text-lg rounded-md">
                      Get started by joining the most advanced community of Bangladesh
                    </p>
                    <Link href="/login">Get Started</Link>
              </div>
              
            </motion.div>
              <div className="flexItem2">
              <motion.div
                initial={{ x:300 ,opacity: 0 }}
                animate={{ x:0, opacity: 1 }}
                transition={{ duration: 1 }}>
                  <Image src="/wallCard1.png" className="image" width="450" height="450"  />
                </motion.div>
              </div>
          </div>
      </section>
      
      </div>
      

      <div className="flex flex-col items-center justify-center min-h-screen py-2 body3 ">
      <section className='indexContainer1'>

          <div className="flexbox">
                <motion.div
                    initial={{ x:-400 ,opacity: 0.5 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ x:0, opacity: 1 }}>
              <div className="flexItem3">  
                <Image src="/aiPreview.png" width="450" height="350" />
              </div>
              </motion.div>
              
              <div className="flexItem4">
                  <section className="cloud1">
                    <p style={pStyle}>&nbsp;&nbsp;&nbsp;&nbsp;A simple code to voice to text</p>
                  </section>
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1 }}>
                  <section className="cloud2">
                 <CodeSnippet/>
                  </section>
                    </motion.div>
                  <br/>
                  <section className="cloud1">
                    <p style={pStyle}>&nbsp;&nbsp;&nbsp;&nbsp;Easy to understand right?</p>
                  </section>
                  <br/>
                  <section className="cloud3">
                    <p style={pStyle}>&nbsp;&nbsp;&nbsp;&nbsp;Coding is not sourcery any more. Our advanced community and courses are here to help you out leap forward</p>
                  </section>
              </div>

          </div>
      </section>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen py-2 body1">
      <section className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <motion.div
                initial={{ y:-150 ,opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{ duration: 1 }}>
        <h1 className="text-6xl font-bold" >
          Welcome to{' '}
          </h1>
          </motion.div>
            <motion.div
                initial={{opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.8 }}>
        <h1>
            <br/>
          <a className="text-blue-600 text-6xl font-bold" href="https://nextjs.org">
            CONNECTEEN
          </a>
        </h1>
        </motion.div>

        <p className="mt-3 text-2xl">
          
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            Get started by joining the most advanced community of Bangladesh
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


