import React from 'react';
import './Form.scss';

function Form(props) {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }


  return (
    < div className='App-form' >
      <form onSubmit={handleSubmit}>
        <label className='URL'>
          <span>URL: </span>
          <input name='url' type='url' id='url' />
          <button type="submit">GO!</button>
        </label>

        <label className="methods">
          {/* <span id="get" type='radio' >GET</span>

          <span id="post">POST</span>

          <span id="put">PUT</span>

          <span id="delete">DELETE</span> */}

          <input id="get" type="radio" />
          <label>GET</label> &nbsp; &nbsp;

          <input id="post" type="radio" />
          <label>POST</label> &nbsp; &nbsp;

          <input id="put" type="radio" />
          <label>PUT</label> &nbsp; &nbsp;

          <input id="delete" type="radio" />
          <label>DELETE</label> &nbsp; &nbsp;

        </label>
      </form>
    </div>
  );

}

export default Form;
