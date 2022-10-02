import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

import './App.scss';
import {WiRaindrops} from "react-icons/wi";
import {BiGasPump} from "react-icons/bi";
import {GrCar} from "react-icons/gr";
import {MdElectricalServices} from "react-icons/md";
import {IoIosPeople} from "react-icons/io";
import {VscGraph} from "react-icons/vsc";
import {CgSmile} from "react-icons/cg";
import {CgSmileNeutral} from "react-icons/cg";
import {CgSmileSad} from "react-icons/cg";

import Quiz from "./quiz";

import LineChart from "./LineChart";
import { UserData } from "./Data";


import {useState} from 'react';

function App() {
  const[score, setScore] = useState(80);
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="App">

        <div className='left'>
          <Quiz/>
        </div>

      
        <div className="earth">
         
        
          <img classname="imga1" src="assets/earth.png" alt="" class="center"/>
          <div className='score'>
            <h1>
              YOUR SCORE TODAY
            </h1>
            <div className='bottom'>
              {score}
            </div>
            
          </div>

        </div>
        <div className="Water">
          <WiRaindrops size="8em" color= "black"
            style={{
              position: 'relative',
              right: '13px',
              bottom: '5px',
            }}
          
          />
        <img src="" alt="" class="center"/>
        </div>
        
        <div className="Car">
          <GrCar size="4em" color= "black"
            style={{
              position: 'relative',
              right: '-17px',
              bottom: '-17px',
            }}
            />
        
        </div>
        <div className="Electric">
          <MdElectricalServices size="4em" color="black"
            style={{
              position: 'relative',
              right: '-17px',
              bottom: '-15px',
            }}
          />

        </div>

        <div className="Gasoline">
          <BiGasPump size="5em" color= "black"
            style={{
              position: 'relative',
              right: '-15px',
              bottom: '-8px',
            }}
          />
        </div>

        <div className="People">
          <IoIosPeople size="5em" color= "black"
            style={{
              position: 'relative',
              right: '-13px',
              bottom: '-8px',
            }}
            />
        </div>  

        <div className="Trend">
          <VscGraph size="4em" color= "black"
            style={{
              position: 'relative',
              right: '-16px',
              bottom: '-20px',
            }}
            />
        </div>   



        {
          score > 75 && (
            <div className="Smile">
              <CgSmile size="5em" color= "black"
                style={{
                  position: 'relative',
                  right: '7px',
                  bottom: '7px',
                }}
              />
                </div> 
          )
        }

        {
          (score > 50 && score < 76) && (
            <div className="Neutral">
              <CgSmileNeutral size="5em" color= "black"
                style={{
                  position: 'relative',
                  right: '7px',
                  bottom: '7px',
                }}
              />
            </div> 
          )
        }

        {
          (score > 0 && score < 51) && (
            <div className="Sad">
              <CgSmileSad size="5em" color= "black"
                style={{
                  position: 'relative',
                  right: '7px',
                  bottom: '7px',
                }}
              />
            </div> 
          )
        }  
        <div style={{ width: 400 }} className='right'>
          <LineChart chartData={userData} />
        </div>   

    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
    </div>
    </div>


    
  );
}

export default App;
