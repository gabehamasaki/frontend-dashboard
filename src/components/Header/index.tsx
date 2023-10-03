import { Menu, Search, Bell } from 'lucide-react'
import Avatar from './avatar'

export default function Header() {
  return (
    <header className='w-full flex justify-between items-center'>
      <Menu />
      <div className='flex gap-4 items-center'>
        <Search />
        <Bell />
        <Avatar fallback='GH' />
      </div>
    </header>
  )
}