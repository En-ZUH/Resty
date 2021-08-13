/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
  }, 1000);

  console.log('props :::', props);
  return (
    <>

      {loading && <Loading />}
      {render && (
        <React.Fragment>
          <div data-testid="results">
            {props.data &&
              <div className="result">

                <h4 className="subTitle2">  Headers :  </h4>
                <JSONPretty theme={JSONPrettyAcai} data={props.data.headers} style={{ fontSize: "1.3rem" }} ></JSONPretty>
                <h4 className="subTitle2">  Counts  : </h4>
                <JSONPretty theme={JSONPrettyAcai} mainStyle="padding:1rem" valueStyle="font-size:1.35rem" data={props.data.count}></JSONPretty>

                {/* <JSONPretty theme={JSONPrettyAcai} style={{ fontSize: "1.1rem" }} data={props.data.count} mainStyle="padding:1rem" valueStyle="font-size:1.5em"></JSONPretty> */}


                <h4 className="subTitle2"> Response :  </h4>
                <JSONPretty theme={JSONPrettyAcai} data={props.data.results}></JSONPretty>
                <br /><br /> <br /> <br />
              </div>
            }
          </div>
        </React.Fragment>
      )
      }
    </>
  );
}

export default Results;