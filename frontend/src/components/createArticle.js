import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useState} from 'react';

export default function () {
  const [nom,setNom]=useState("");


  return (
    <Form >
       <br/><br/>      <br/><br/>    <h1 style={{"color":"red", "text-align":"center"}}> Page d'ajout de nouveau produit  </h1>   <br/><br/>      <br/><br/>
      
      <Form.Group className="mb-3" >
        <Form.Label>Nom d'article</Form.Label>
        <Form.Control type="text" placeholder="Enter le nom d'article"   name="nom" required
        onChange={(e)=>{
                setNom(e.target.value)
              }}
         />
        
      </Form.Group>

     
      <Button variant="primary" type="submit"
       onClick={()=>{

        
                    
        axios.post('http://localhost:5000/api/article/create', {
         nom
            })
            .then((res) => {
            console.log(res);
            //this.props.history.push('/verification');
            window.location="/article"
            })




              }}> Ajouter</Button> 
              &nbsp;  &nbsp;  &nbsp;  &nbsp; 
      <Button variant="primary" type="submit" href="/article">
       Annuler
      </Button>
 
    </Form>
  )
        }
