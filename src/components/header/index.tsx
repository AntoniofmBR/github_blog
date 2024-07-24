import headerBackground from '../../assets/background_header.svg'
import { HeaderContainer } from './style';

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerBackground} alt="background" />
    </HeaderContainer>
  )
}