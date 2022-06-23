import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar>
        <Container>
          <Link href='/' passHref={true}>
            <Navbar.Brand><b>National Founders Club</b></Navbar.Brand>
          </Link>
          <Nav className='ms-auto'>
            <Link href='/team' passHref={true}>
              <Nav.Link>Team</Nav.Link>
            </Link>
            <Link href='/resources' passHref={true}>
              <Nav.Link>Resources</Nav.Link>
            </Link>
            <Link href='join' passHref={true}>
              <Nav.Link>Start Chapter!</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Component {...pageProps}></Component>
    </>
  );
}

export default MyApp;
