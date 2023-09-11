import logo from '../assets/svg/logo.svg'

export function Header() {
  return (
    <header className="flex items-center px-10 py-4 bg-brand-900">
      <img src={logo} alt="Logo do site" />
    </header>
  )
}
