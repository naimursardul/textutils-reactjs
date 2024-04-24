import React from 'react';

const Alert = (props) => {
    const capitalizer = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{height:"40px"}}>
        {props.alertOutput && <div className={`alert alert-${props.alertOutput.type} alert-dismissible fade show`} role="alert" >
        <strong>{capitalizer(props.alertOutput.type)}!</strong> {props.alertOutput.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>}
      </div>
    );
};

export default Alert;