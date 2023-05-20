import { Link } from "react-router-dom"


export const Footer= () => {
    return (
    
            <div className="text-center bg-info py-4 mt-5 fixed-botton" >
              <p className="d-flex-center ">
                @Copyright 2023 Mi Vivero Virtual | Creada por: 
                <Link className="autor" to="/">  Lucas Ivan Arguello  </Link>
              </p>
            </div>

              
      
    )
  }
  
  