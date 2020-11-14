import React from 'react';

function clickMenu(event) {

}

function mapFilters(filter) {

    console.log("places list: "+Object.values(filter.placesList));

    var selectedPlaceId = filter.selectedPlaceId;
    var filteredPlace = filter.placesList.filter(place => place.id === selectedPlaceId);
    var placeName = filteredPlace.length > 0 ? filteredPlace[0].name : null;
    return <div
                style={{
                    cursor: "pointer",
                    position: "relative",
                    top: "10px",
                    float: "right",
                    right: "0px",
                    display: "inline-block"
                }}
                onClick={clickMenu}>
        {placeName}
        &nbsp;&nbsp;
        {placeName && <img src="images/icons/icon-arrow-down.png"
             style={{width: "12px", position: "relative", top: "5px", opacity: "0.9"}}
        />}

        {filter.showMenu && <ul style={{
            position: "absolute",
            border: "1px solid black",
            backgroundColor: "white",
            textAlign: "center",
            minWidth: "100px",
        }}>
          <li>Blava je najsamplepšie mesto na svete</li>
          <li>Bla</li>
          <li>Bla</li>
          <li>Bla</li>
        </ul>}
    </div>

}


function SubTitle(props) {

    return (
        <div className="sub-title" style={props.style}>
            <h1>{props.text}</h1>
            <hr className="title-hr"/>
        </div>
    );
}

export default function Title(props) {

    console.log("2___*shift title filters* typeof: "+ typeof props.filters);
    console.log("2___*shift title filters*: "+ props.filters);
    if (props.filters) console.log("2___*shift title filters list*: "+ Object.values(props.filters));

    return (
        <div className="title" style={props.style}>
            <h1>{props.text}</h1>
            {props.filters && props.filters.map(mapFilters)}
            <hr className="title-hr"/>
        </div>
    );
}

export {SubTitle};