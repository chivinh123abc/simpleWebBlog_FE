import Button from '~/components/Button'

const Home = () => (
  <div className='min-h-screen flex flex-col items-center justify-center'>
    <h1 className='text-4xl font-bold mb-4'>Welcome to my Blog</h1>
    <p className='text-gray-700 mb-6'>
      This is content
    </p>

    <Button>Get Started</Button>
  </div>
)

export default Home
