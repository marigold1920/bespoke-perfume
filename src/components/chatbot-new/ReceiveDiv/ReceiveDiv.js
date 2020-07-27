import React from "react";

export default function (props) {
  let date = new Date();
  let timenow = date.getHours()+ "h" + date.getMinutes()+"m";
  
  return (
    <div className="media w-50 ml-auto mb-3">
      <div className="media-body">
        <div className="bg-primary rounded py-2 px-3 mb-2">
          <p className="text-small mb-0 text-white">{props.message}</p>
          
        </div>
        <p className="small text-muted">{timenow}</p>
      </div>
    </div>
  );
}
