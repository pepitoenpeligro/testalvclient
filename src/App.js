import React, { Fragment } from 'react';
import Layout from './core/Layout';
import { isAuth } from './auth/helpers'

import './App.css';

require('dotenv').config()

const App = () => {

  return (
    <Layout>
      <div className="page-header mt-4 mb-4">
        <h1> PER Exam Platform</h1>
      </div>



      {/* <div class="d-none"> */}
      <div>
        <div  className="card mb-5 m-5 ">
          <div className="card-header text-center h3">Notes for the user</div>
          <div className="card-body">

            <div className="row">

              <div className="col mb-4">

                <ul>

                  <li>Por favor, inicie sesión de usuario (SignIn) si ha pasado más de 15 minutos desde el anterior uso para despertar el contenedor del servidor :)</li>
                  <li></li>
                  <li></li>
                </ul>

              </div>
            </div>


          </div>
        </div>


        <div className="card mb-5 m-5 ">
          <div className="card-header text-center h3">Notes for the developer</div>
          <div className="card-body">

            <div className="row">

              <div className="col mb-4">

                <ul>
                  <li></li>
                  <li></li>
                </ul>

              </div>
            </div>


          </div>
        </div>
      </div>





      {/* {isAuth() && welcome()} */}


    </Layout>
  )
}




export default App;
