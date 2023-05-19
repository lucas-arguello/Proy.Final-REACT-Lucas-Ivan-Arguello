
import {Link, NavLink} from "react-router-dom"
import { Navbar, Container, Nav, } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"


const categories = [{id: "1", category:"Planta de interior", name: "Plantas de interior"},
                    {id: "2", category:"Planta de exterior", name: "Plantas de exterior"}]

export const NavBar = () => {

  return (
      
       <Navbar className="p-4"collapseOnSelect expand="lg" bg="info" variant="dark" >
          <Container>
            
            <Link className="text-black fw-lighter fs-4 col-sm-5 " to= "/" > 
                MI VIVERO VIRTUAL 
            </Link>

            <Navbar.Toggle className="" aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className= "text-center" id="responsive-navbar-nav">
               
               <Nav className="me-auto">
                 
                 {categories.map (category => 
                        <NavLink 
                              key= {category.id} 
                              to={`/category/${category.category}`} 
                              className={({isActive}) => isActive ? "m-2 btn btn-primary" : "m-2 btn btn-outline-dark"}> 
                              
                              {category.name}
                        </NavLink>)}
               
               </Nav>

               <Nav>
                 <Link className="" to= "/cart">
                      <CartWidget/>
                 </Link>
               </Nav>
             </Navbar.Collapse>
           </Container>
          
       </Navbar>

   )
}




















