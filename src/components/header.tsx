import logo from '../assets/svg/logo.svg'

export function Header() {
  return (
    <header className="flex items-center px-10 col-span-full bg-brand-900">
      <img src={logo} alt="Logo do site" />
    </header>
  )
}
