import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="bg-info py-4 mt-5 fixed-bottom">
      <Container className="text-center">
        <p className="d-flex-center">
          © 2023 Mi Vivero Virtual | Creada por:
          <Link className="autor" to="/">
            Lucas Ivan Arguello
          </Link>
        </p>
      </Container>
    </div>
  );
};
