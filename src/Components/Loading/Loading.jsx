import React from 'react';
import RingLoader from "react-spinners/RingLoader";
import './Loading.scss';


function Loading() {

    return (
        <div className="loadingStyle">
            <RingLoader size={100} color={'rgb(110, 19, 75)'}
            />
        </div>
    );
}
export default Loading;








