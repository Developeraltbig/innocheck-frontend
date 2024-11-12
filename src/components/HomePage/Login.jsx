import "../../assets/css/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <>
      <Form className="login-form-1">
        <h3 className="login-heading text-left">Create new Account</h3>
        <a className="div-p1 text-left" href="/register">
          <span style={{ color: "#000" }}>Already Registered? Log in </span>
          <span style={{ color: "#44B9FF", borderBottom: "1px solid #44B9FF" }}>
            here
          </span>
        </a>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input
            type="text"
            className="form-control form-input-stl-1"
            placeholder="Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input
            type="text"
            className="form-control form-input-stl-1"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <input
            type="password"
            className="form-control form-input-stl-1"
            placeholder="Password"
          />
        </Form.Group>
        <a className="div-p" href="#">
          Forgot your password?
        </a>
        <div className="text-center btn-stl-1">
          <Button className="btn-stl" variant="primary" type="submit">
            sign up
          </Button>
        </div>
      </Form>
    </>
  );
}
