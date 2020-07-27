import React from "react";
import './SenderCardDiv.css';

// const [elementChosen, setElementChosen] = React.useState("");



const SenderCardDiv = (props) => {

    const handleElementClicked = (ele) => {
        // setElementChosen(ele);
        console.log(ele);
        props.onSelectElement(ele);
    }

    // const GLO_SUC =
    //     "https://i.kym-cdn.com/photos/images/original/001/852/407/036.gif";
    const GLO_SUC = "https://scent-workshop.com/wp-content/uploads/2020/03/note-logo-300x223-1.png";
    return (
        <div className="media w-50 mb-3">
            <img src={GLO_SUC} alt="user" width={50} className="rounded-circle" />
            <div className="media-body ml-3">
                <div className="bg-light rounded py-2 px-3 mb-2">
                    <p className="text-small mb-0 text-muted">{props.message}</p>

                    {props.customData.map((ele) =>

                        <div className="sender-card-main-div-style" onClick={() => handleElementClicked(ele)}>
                            <div className="card-image">
                                <img src={GLO_SUC} />
                                {/* <span className="card-title">{ele}</span> */}
                            </div>
                            <div className="card-content" >
                                <p>{ele}</p>
                            </div>
                            {/* <div className="card-action">
                                        <a href="#">This is a link</a>
                                    </div> */}
                        </div>

                    )}

                </div>
                <p className="small text-muted">12:00 PM | Aug 13</p>
            </div>
        </div>
    );
};

export default SenderCardDiv;