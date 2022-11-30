
import { Button }from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios'

import {  useEffect, useState} from 'react';
import createArticle from './createArticle';

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
export default function Article()  {
 
  
  const [nom, setNom] = useState("");
 
  const [open, setOpen] = useState(false);
 
  const [openforUpdate, setOpenforUpdate] = useState(false);

  const [idArticle, setIdArticle] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseUpdate = () => {
    setOpenforUpdate(false);
  };

  const [article, setArticle] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/article")
  
      .then((res) => {
        console.log(res);
        setArticle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 

  return (
    <div> 
    <h1 style={{"text-align":"center"}}>Liste de articles</h1>
    <br/>    <br/>  
    <div style={{"text-align":"center"}}>
      <Button variant="primary"   onClick={() => {
                        window.location = "/CreateArticle";
                      }} >Créer un nouveau produit</Button>{' '}
      
      </div>
      <br/>    <br/> 

      <Table striped bordered hover>
      <thead>
        
        <tr>
          <th>id</th>
          <th>Nom</th>
          <th>date de création</th>
          
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
      {article.map((articles) => {
           return (
        <tr>
          
          <>
          <td>{articles._id}</td>
          <td>{articles.nom}</td>
          <td>{articles.dateCreation}</td>
          <td> &nbsp; &nbsp; &nbsp;
          <Button variant="success" onClick={
                        ()=>{
                          setIdArticle(articles._id);
                          setOpenforUpdate(true);
                          
                        }
                      }>modifier</Button> &nbsp; &nbsp; &nbsp;
          <Button variant="success"  onClick={
                        ()=>{
                          setIdArticle(articles._id);
                          setOpen(true);
                          
                        }
                      }
          >supprimer</Button></td>
           
          </>
      
         
        </tr>
        )})}
      </tbody>
    </Table>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Suppression</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Vous-êtes sûr de supprimer cet article.. ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async (variant) => {
              axios
                .delete(
                  `http://localhost:5000/api/article/delete/${idArticle}`
                )
                .then(
                  (res) => console.log(res),
                  setOpen(false),
                  (window.location = "/article")
                )
                .catch((err) => console.log(err));
            }}
          >
            Oui
          </Button>
          <Button onClick={handleClose} autoFocus>
            Non
          </Button>
        </DialogActions>
      </Dialog>







      <Dialog
        open={openforUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Modification</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Vous-êtes sûr de modifier cet article.. ?
          </DialogContentText>
     
          <TextField
              margin="normal"
              required
              fullWidth
              id="nom"
              name="nom"
              autoComplete="nom"
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
        </DialogContent>



        
        <DialogActions>
          <Button
            onClick={async (variant) => {
              axios
                .put(
                  `http://localhost:5000/api/article/update/${idArticle}`, {
                    nom: nom
                  }

                )
                .then(
                  (res) => console.log(res),
                  setOpenforUpdate(false),
                  (window.location = "/article")
                )
                .catch((err) => console.log(err));
            }}
          >
           Modifier
          </Button>
          <Button onClick={handleCloseUpdate} autoFocus>
           Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
  } 