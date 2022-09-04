import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Formulario = () => {

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [dni, setDni] = useState("")
  const [email, setEmail] = useState("")
    
  // validaciones
  const emailRexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(nombre.trim()==='' ||apellido.trim()==='' || dni.trim() ==='' || !emailRexp.test(email)){
      alert(`Completar todos los datos.`)
      return;
    }else{
      setNombre('');
      setEmail('');
      alert(`Los datos fueron enviados`)
    }
    setNombre("");
    setApellido("");
    setDni("");
    setEmail("");
  }

  return (
    <Form className="container" style={{backgroundColor:"rgb(207,244,252)"}} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>NOMBRE</Form.Label>
        <Form.Control type="text" placeholder="Pablo" value={nombre} nombre={nombre} onChange={e => setNombre(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Label>APELLIDO</Form.Label>
        <Form.Control type="text" placeholder="Perez" value={apellido} apellido={apellido} onChange={e => setApellido(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="dni">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="number" placeholder="12345678" value={dni} dni={dni} onChange={e => setDni(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="email" placeholder="pabloperez@gmail.com" value={email} email={email} onChange={e => setEmail(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-3">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
