import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from './components/Banner'
import Navbar2 from './components/Navbar2'

const Courses: NextPage = () => {
  const courses = {
    course1: {
      name: 'Python',
      description: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace.',
      image: '/python.png',
      link: 'https://www.youtube.com/watch?v=rfscVS0vtbw'
    },
    course2: {
      name: 'C++',
      description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.',
      image: '/cpp.png',
      link: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y'
    },
    course3: {
      name: 'Java',
      description: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
      image: '/java.png',
      link: 'https://www.youtube.com/watch?v=eIrMbAQSU34'
    },
    course4: {
      name: 'JavaScript',
      description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
      image: '/js.png',
      link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk'
    },
    course5: {
      name: 'HTML',
      description: 'HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
      image: '/html.png',
      link: 'https://www.youtube.com/watch?v=UB1O30fR-EE'
    },
    course6: {
      name: 'CSS',
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
      image: '/css.png',
      link: 'https://www.youtube.com/watch?v=1PnVor36_40'
    },
    course7: {
      name: 'C',
      description: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computers ranging from supercomputers to embedded systems.',
      image: '/c.png',
      link: 'https://www.youtube.com/watch?v=KJgsSFOSQv0'
    },
    course8: {
      name: 'C#',
      description: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed around 2000 by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2018). C# is one of the programming languages designed for the Common Language Infrastructure.',
      image: '/csharp.png',
      link: 'https://www.youtube.com/watch?v=GhQdlIFylQ8'
    },
    course9: {
      name: 'PHP',
      description: 'PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.',
      image: '/php.png',
      link: 'https://www.youtube.com/watch?v=OK_JCtrrv-c'
    },
    course10: {
      name: 'SQL',
      description: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.',
      image: '/sql.png',
      link: 'https://www.youtube.com/watch?v=HXV3zeQKqGY'
    },
    course11: {
      name: 'Ruby',
      description: 'Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, including functional, object-oriented, and imperative. It also has a dynamic type system and automatic memory management.',
      image: '/ruby.png',
      link: 'https://www.youtube.com/watch?v=t_ispmWmdjY'
    },
    course12: {
      name: 'Swift',
      description: 'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple\'s Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6.',
      image: '/swift.png',
      link: 'https://www.youtube.com/watch?v=H0XScE08hy8'
    },
    course13: {
      name: 'Machine Learning',
      description: 'Machine learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence. Machine learning algorithms build a mathematical model based on sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to do so.',
      image: '/ml.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
    course14: {
      name: 'Deep Learning',
      description: 'Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.',
      image: '/dl.png',
      link: 'https://www.youtube.com/watch?v=aircAruvnKk'
    },
    course15: {
      name: 'Data Science',
      description: 'Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data. Data science is related to data mining, machine learning and big data.',
      image: '/ds.png',
      link: 'https://www.youtube.com/watch?v=aircAruvnKk'
    },
    course16: {
      name: 'Artificial Intelligence',
      description: 'Artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and other animals. In computer science AI research is defined as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.',
      image: '/ai.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
    course17: {
      name: 'Blockchain',
      description: 'A blockchain, originally block chain, is a growing list of records, called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. By design, a blockchain is resistant to modification of the data. It is "an open, distributed ledger that can record transactions between two parties efficiently and in a verifiable and permanent way".',
      image: '/blockchain.png',
      link: 'https://www.youtube.com/watch?v=SSo_EIwHSd4'
    },
    course18: {
      name: 'Image Processing',
      description: 'Image processing is a method to perform some operations on an image, in order to get an enhanced image or to extract some useful information from it. In general, digital image processing is the use of computer algorithms to perform image processing on digital images. As a subcategory or field of digital signal processing, digital image processing has many advantages over analog image processing.',
      image: '/ip.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
    course19: {
      name: 'Computer Vision',
      description: 'Computer vision is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to understand and automate tasks that the human visual system can do.',
      image: '/cv.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
    course20: {
      name: 'Natural Language Processing',
      description: 'Natural language processing (NLP) is a subfield of linguistics, computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data. Challenges in natural language processing frequently involve speech recognition, natural language understanding, and natural-language generation.',
      image: '/nlp.png',
      link: 'https://www.youtube.com/watch?v=JcI5Vnw0bN8'
    },
  }
  return (
    <>
    <Banner />
    <Navbar2 />
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Connecteen | Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          We offer advanced courses in {' '}
        </h1>


        <div className="mt-8 flex max-w-8xl flex-wrap items-center justify-around sm:w-full">
        
        
      
        {/* 👇️ iterate object VALUES */}
        {Object.values(courses).map((value, index) => {
          return (
            <a href="/course/" className="cardCourse mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600" key={index}>
              <p className="text-2xl font-bold">{value.name}</p>
              <p className="text-sm mt-4">{value.description}</p>
              <div className="flex justify-between mt-6">
                <p className="text-blue-600">Learn more</p>
              </div>
            </a>
          )
        })}
        </div>
      </main>
    </div>
    </>
  )
}
              

        
export default (Courses);


/*
<a href="https://nextjs.org/docs"className="card mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">

with image import

            <a href="https://nextjs.org/docs"className="card mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600" key={index}>
              <p className="text-2xl font-bold">{value.name}</p>
              <p className="text-sm mt-4">{value.description}</p>
              <div className="flex justify-between mt-6">
                <p className="text-blue-600">Learn more</p>
                <img src={value.image} alt="logo" className="w-6 h-6" />
              </div>
            </a>
*/