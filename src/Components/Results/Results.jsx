import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import './Results.scss';


import Loading from '../Loading/Loading';


function Results(props) {

  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(false);
  setTimeout(() => {
    setLoading(false);
    setRender(true);
  }, 3000);


  return (
    <>
      {loading && <Loading />}
      {render && (
        <React.Fragment>
          <div className="result" data-testid="results">
            {/* <h2>Results :</h2> */}
            {/* <h2>Results :</h2>
              <ReactJson src={props.data} /> */}

            {props.data &&
              <>
                <h4> "Headers : "</h4>
                <ReactJson src={props.data.Headers} />

                <h4> "Count : "</h4>
                <ReactJson src={props.data.count} />

                <h4>"Results : "</h4>
                <ReactJson src={props.data.results} />
              </>
            }
          </div>
        </React.Fragment>
      )}
    </>
  );
}



export default Results;