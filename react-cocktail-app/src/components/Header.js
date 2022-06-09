import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="/">Cocktails</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
