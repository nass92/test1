
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

const Na = ({ setCrypto }) => {
  const handleInput = (e) => {
    setCrypto(e.target.value)
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">BLCK</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Article</Nav.Link>
          <Nav.Link href="#pricing">List Price Coins</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl onChange={handleInput} type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </header>


  );
}
export default Na