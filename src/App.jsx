import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div>
      {/*       <h1 style={{color: "blue"}}>hola react con vite</h1> */}
      <div class="container">

        <div className="row">
          <div class="card col-2 bg-primary">
            <div class="card-body ">
              <img src="./img/mari.png" class="rounded-circle border border-white w-25" alt="" />
              <p class="card-text fs-5 text-white opacity-50">Repor for</p>
              <p class="card-text fs-1 text-white">Jeremy Robson</p>
            </div>
          </div>

          <div className="col-3">
            <div className="col color rounded">

            </div>
            <div className="col bg-primary rounded hrs p-4">
              <div className='d-flex justify-content-between'>

                <strong>
                  <p class="text-white">
                    Work
                  </p>
                </strong>

                <p class=" text-white">
                  ...
                </p>
              </div>


              <h2 class="fs-9 text-white">
                32hrs
              </h2>

              <p class="text-white opacity-50">
                Last Week - 36hrs
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-2 bg-primary-subtle rounded mt-6">
            <p class="text-white opacity-50">
              Daily
            </p>

            <strong class="">
              <p class="text-white">
                Weekly
              </p>

            </strong>

            <p class="text-white opacity-50">
              Monthly
            </p>
          </div>

          
        </div>
      </div>


    </div>
  )
}

export default App
