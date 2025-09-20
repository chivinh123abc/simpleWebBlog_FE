import type React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer'
  >
    {children}
  </button>
)

export default Button
