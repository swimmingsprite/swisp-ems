import React from 'react';


export default function ShowMoreCommentsPanel(props) {



    return (
        <div className="show-more-comments-panel"
            // style={{}}
            >

            {/*todo text cez redux, onclick*/}
            <p onClick={props.onClick}> zobraziť ďalšie komentáre...</p>


        </div>
    );
}