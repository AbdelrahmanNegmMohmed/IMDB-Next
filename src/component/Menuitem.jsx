import Link from 'next/link'

export default function Menuitem({title, Icon, address}) {
  return (
    <Link href={address} className=' hover:text-amber-500'>
        <Icon className="text-2xl sm:hidden"/>
        <p className='uppercase hidden sm:inline'>{title}</p>
    </Link>
  )
}
