import logoImg from '../../assets/investment-calculator-logo.png'
import './Header.css'

export default function Header() {
  return (
    <header id="header">
      <img src={logoImg} alt="investment-calculator" />
      <h1>React Investment Calculator</h1>
    </header>
  )
}
