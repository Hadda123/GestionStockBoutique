import React, {useState} from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
export default function Login() {

const [login,setLogin]=useState("");

const [password,setPassword]=useState("");



  return (
    <MDBContainer fluid className="p-3 my-5">
<h1 style={{"text-align":"center"}}>Page de connexion</h1>
  <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='6'>


        <br/>  <br/>  <br/>  <br/>  <br/>  <br/> 
        Login<MDBInput wrapperClass='mb-4'id='formControlLg' type='text' size="lg" required    onChange={(e)=>{
                setLogin(e.target.value)
              }}/>
        Password  <MDBInput wrapperClass='mb-4'  id='formControlLg' type='password' size="lg" required    onChange={(e)=>{
                setPassword(e.target.value)
              }}/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" type="submit"
           onClick={()=>{

        
                    
            axios.post('http://localhost:5000/api/user/connect', {
             login, 
             password
                })
                .then((res) => {
                console.log(res);
                //this.props.history.push('/verification');
                window.location="/article"
                })
    
    
    
    
                  }}>Sign in</MDBBtn>

          

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}