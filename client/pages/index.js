import Homescreen from '@/screens/Homescreen';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quizzy</title>
        <meta
          name='description'
          content='Discover, challenge, and have fun with our captivating quizzes at QUIZZY. Test your knowledge across various topics and engage in an interactive learning experience. Join our community of quiz enthusiasts and embark on a journey of exploration today'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>
      {/* <main className='w-full h-screen bg-bgGrey mt'>
        <div className='w-48 border border-red-700 text-black'>A box</div>
        <Homescreen />
      </main> */}
      <main className='flex items-center justify-center min-h-screen bg-bgGrey'>
        <Homescreen />
      </main>
    </>
  );
}
