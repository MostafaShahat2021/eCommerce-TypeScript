import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@styles/global.css';
Link;
const Error = () => {
  return (
    <Container className="notFound">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" replace={true}>
        Looks like you've reached non-existent page. <br />
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
