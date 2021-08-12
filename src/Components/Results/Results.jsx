/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
//import ReactJson from 'react-json-view';
import './Results.scss';
import Loading from '../Loading/Loading';
import 'react-json-pretty/themes/monikai.css';
import JSONPretty from 'react-json-pretty';
var JSONPrettyAcai = require('react-json-pretty/dist/acai');



function Results(props) {

  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(false);

  setTimeout(() => {
    setLoading(false);
    setRender(true);
  }, 3000);


  console.log('prroooooops', props);
  return (
    <>
      {loading && <Loading />}
      {render && (
        <React.Fragment>
          <div data-testid="results">

            {/* <h2>Results :</h2>
              <ReactJson src={props.data} /> */}

            {props.data &&
              <div className="result">
                <h4>  Headers :  </h4>
                <JSONPretty theme={JSONPrettyAcai} data={props.data.headers}></JSONPretty>
                <h4>  Counts  : </h4>
                <JSONPretty theme={JSONPrettyAcai} data={props.data.count}></JSONPretty>

                <h4> Response :  </h4>
                <JSONPretty theme={JSONPrettyAcai} data={props.data.results}></JSONPretty>
                <br /><br /> <br /> <br />
              </div>
            }
          </div>
        </React.Fragment>
      )}
    </>
  );
}



export default Results;