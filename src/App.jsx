import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

import './App.scss';
import {WiRaindrops} from "react-icons/wi";
import {BiGasPump} from "react-icons/bi";
import {GrCar, GrSans} from "react-icons/gr";
import {MdElectricalServices} from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {VscGraph} from "react-icons/vsc";
import {CgSmile} from "react-icons/cg";
import {CgSmileNeutral} from "react-icons/cg";
import {CgSmileSad} from "react-icons/cg";
import {AiOutlineStar} from "react-icons/ai"

import Quiz from "./quiz";

import LineChartWater from "./LineChartWater";
import LineChartTrans from "./LineChartTrans";
import LineChartGas from "./LineChartGas";
import LineChartElec from "./LineChartElec";

import { DataWater } from "./DataWater";
import { DataTrans } from "./DataTrans";
import { DataGas } from "./DataGas";
import { DataElec } from "./DataElec";


import {useState} from 'react';

function App() {

  const[quizclick, setquizclick] = useState(false);
  const onquizclick = () => setquizclick(!quizclick);
  const[chatclick, setchatclick] = useState(false);
  const onchatclick = () => setchatclick(!chatclick)
  const[waterclick, setwaterclick] = useState(false);
  const onwaterclick = () => setwaterclick(!waterclick)

  const[score, setScore] = useState(20);
  const [userData, setUserData] = useState({
    labels: DataWater.map((data) => data.day),
    datasets: [
      {
        label: "Water Usage (Gal.)",
        data: DataWater.map((data) => data.userGain),
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

  const[elecclick, setelecclick] = useState(false);
  const onelecclick = () => setelecclick(!elecclick)

  const [elec, setelec] = useState({
    labels: DataElec.map((data) => data.day),
    datasets: [
      {
        label: "Electricity Usage (kW-h)",
        data: DataElec.map((data) => data.userGain),
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


  const[gasclick, setgasclick] = useState(false);
  const ongasclick = () => setgasclick(!gasclick)
  const [gas, setgas] = useState({
    labels: DataGas.map((data) => data.day),
    datasets: [
      {
        label: "Household Gas Usage (Gal.)",
        data: DataGas.map((data) => data.userGain),
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


  const[transclick, settransclick] = useState(false);
  const ontransclick = () => settransclick(!transclick)

  const [trans, settrans] = useState({
    labels: DataTrans.map((data) => data.day),
    datasets: [
      {
        label: "Gas Usage (Gal.)",
        data: DataTrans.map((data) => data.userGain),
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

      {
        quizclick && (
        <div className='quiz'>
          <Quiz/>
        </div>
        )

      }


      
        <div className="earth">
         
          {
            (score > 75 )&& (<img classname="imga1" src="assets/happy.png" alt="" class="center"/>)
          }
          {
            (score > 50 && score < 76) && (<img classname="imga1" src="assets/neutral.PNG" alt="" class="center"/>)
          }
          {
            (score > 0 && score < 51) && (<img classname="imga1" src="assets/sad.PNG" alt="" class="center"/>)
          }
          
          <div className='score'>
            <h1>
              HOW I'M DOING TODAY
            </h1>
            
            <div className='bottom'>
              {score}
            </div>
            
          </div>

        </div>
        <div className="Water" onClick={onwaterclick}>
          <WiRaindrops size="8em" color= "black"
            style={{
              position: 'relative',
              right: '13px',
              bottom: '5px',
            }}
          
          />
        <img src="" alt="" class="center"/>
        </div>
        
        <div className="Car" onClick={ontransclick}>
          <GrCar size="4em" color= "black"
            style={{
              position: 'relative',
              right: '-17px',
              bottom: '-17px',
            }}
            />
        
        </div>
        <div className="Electric" onClick={onelecclick}>
          <MdElectricalServices size="4em" color="black"
            style={{
              position: 'relative',
              right: '-17px',
              bottom: '-15px',
            }}
          />

        </div>

        <div className="Gasoline" onClick={ongasclick}>
          <BiGasPump size="5em" color= "black"
            style={{
              position: 'relative',
              right: '-15px',
              bottom: '-8px',
            }}
          />
        </div>

        <div className="People" onClick={onchatclick}>
          <BsFillChatDotsFill size="3em" color= "black"
            style={{
              position: 'relative',
              right: '-26px',
              bottom: '-25px',
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

        <div className="Star">

          <AiOutlineStar size="3em" color= "white"
            style={{
              position: 'relative',
              left: '30px',
              top: '200px',
            }}

          />


            
        </div> 
        
        
        { waterclick && 
          ( <div style={{ width: 400 }} className='right'>{ onwaterclick && (<LineChartWater chartData={userData} />)}</div> )
        }
        { gasclick && 
          ( <div style={{ width: 400 }} className='right'>{ ongasclick && (<LineChartGas chartData={gas} />)}</div> )
        }
        { elecclick && 
          ( <div style={{ width: 400 }} className='right'>{ onelecclick && (<LineChartElec chartData={elec} />)}</div> )
        }
        { transclick && 
          ( <div style={{ width: 400 }} className='right'>{ ontransclick && (<LineChartTrans chartData={trans} />)}</div> )
        }
        

          
      { chatclick && (<div className="left">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
    </div>)
    
    }
    </div>


    
  );
}

export default App;
