import {useState} from 'react';
import { config } from '../configs/header';

import Link from "next/link";
import { withRouter } from 'next/router';

import {
  Nav, 
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  Label
} from 'reactstrap';

const NavButton = props => (
  <NavItem key={props.name} style={config.styles.link} className={props.active ? "active-nav-item" : null}>
	  <Link href={props.path}>
	    <div>
	      <span style={config.styles.link}>{props.name}</span>
	    </div>
	  </Link>
  </NavItem>
);

const Header = (props) =>{

  const [ open, setOpen] = useState(false);

  return (
  	<div className="header" style={config.styles.main}>
  	  <Navbar dark expand="md" style={config.styles.nav}> 
        <NavbarBrand style={config.styles.logo} href="/">Future Lithics</NavbarBrand>
        <NavbarToggler onClick={setOpen} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto pr-2">
          	{
          	  config.navigation.map((n) => {
          	  	return (
          	  	  <NavButton 
          	  	    name={n.name} 
          	  	    path={n.path} 
          	  	    active={(props.router.pathname == n.path)} 
          	  	  />
          	  	)
          	  })
          	}
          </Nav>
        </Collapse>
      </Navbar>
  	</div>
  )
   
}

export default withRouter(Header);