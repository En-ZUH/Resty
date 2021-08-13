import React from 'react';
import './History.scss';

function History(props) {

    return (

        <div className='title2' >
            <h3  >&nbsp;&nbsp;&nbsp; History : </h3>
            <h4 className='subTitle'>   Method :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    URL : </h4>

            {props.history.map((record) => {
                return (
                    <>
                        < ul  >


                            <span  >   &nbsp;{record.method}
                                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  {record.url} </span>
                        </ul>
                    </>
                )
            })
            }
        </div >

    )

}

export default History;
