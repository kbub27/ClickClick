import React from "react";

const Col = props => {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
    return (
        <div className={size}>
            {props.children}
        </div>
    );
};

export default Col;