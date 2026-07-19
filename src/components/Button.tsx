import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
}

export default function Button({ children, to, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 cursor-pointer'

  const variants = {
    primary: 'bg-[#184332] text-white hover:bg-[#0f2b20]',
    secondary: 'bg-[#BC6C25] text-white hover:bg-[#a05e1f]',
    outline: 'border-2 border-[#184332] text-[#184332] hover:bg-[#184332] hover:text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>
  }
  return <button type="button" className={classes} onClick={onClick}>{children}</button>
}
