import './Header.css';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';

function Header() {
  return (
    <header>
      <p className="logo">logo</p> <Button />
      <Nav />
    </header>
  );
}

export default Header;
