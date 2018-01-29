import React from 'react';

const Option = (props) => (
    <div>
        {"Option: " + props.option}
        <button 
            onClick={(e) => {
                props.handleDeleteOption(props.option)
            }}
        >
            remove
        </button>
    </div>
);

export default Option;