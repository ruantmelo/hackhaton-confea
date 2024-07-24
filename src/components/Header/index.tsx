import { UserMenu } from "./UserMenu"

export const Header = () => {
  return (
    <header className='flex w-full pl-12 pr-6 py-4 justify-end'>
      <UserMenu />
    </header>
  )
}