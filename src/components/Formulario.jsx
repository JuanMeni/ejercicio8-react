import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {

    

  return (
    <Form className="container" style={{backgroundColor:"rgb(207,244,252)"}}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>NOMBRE</Form.Label>
        <Form.Control type="text" placeholder="Pablo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Label>APELLIDO</Form.Label>
        <Form.Control type="text" placeholder="Perez" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="dni">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="number" placeholder="12345678" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="email" placeholder="pabloperez@gmail.com" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-3">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
