import React from 'react';
import ReactJson from 'react-json-view';
import './Results.scss';


class Results extends React.Component {

  render() {
    return (

      <React.Fragment>
        <div className="result">
          <h2>Results :</h2>
          {this.props.data &&
            <>
              {/* <h2>Results :</h2> */}
              <ReactJson src={this.props.data} />
            </>
          }
        </div>

      </React.Fragment>


    )
  }
}



export default Results