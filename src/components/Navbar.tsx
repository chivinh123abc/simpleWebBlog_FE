import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className='w-full bg-blue-600 text-white p-4 flex justify-between items-center'>
    <h1 className='text-xl font-bold text-red-500'>My Blog</h1>
    <ul className='flex gap-4'>
      <li className='hover:text-gray-300 cursor-pointer'>
        <Link to='/'>Home</Link>
      </li>
      <li className='hover:text-gray-300 cursor-pointer'>
        <Link to='/about'>About</Link>
      </li>
      <li className='hover:text-gray-300 cursor-pointer'>
        <Link to='/blog/1'>Blog</Link>
      </li>
    </ul>
  </nav >
)


export default Navbar