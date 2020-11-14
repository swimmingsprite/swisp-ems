import React from 'react';


function mapFilters(filter, props) {

    console.log("places list: " + Object.values(filter.placesList));
    var hideList = true;

    var selectedPlaceId = filter.selectedPlaceId;
    var filteredPlace = filter.placesList.filter(place => place.id === selectedPlaceId);
    var placeName = filteredPlace.length > 0 ? filteredPlace[0].name : null;
    return <div
        className={"title-filter"}

        onMouseOver={() => {
            hideList = false;
            props.onMouseOver()}}
        onMouseOut={() => {
            setTimeout(() => {
                hideList && props.onMouseOut()
            }, 350);
        }}
    >
        {placeName}
        &nbsp;&nbsp;
        {placeName && <img src="images/icons/icon-arrow-down.png"
                           style={{width: "12px", position: "relative", top: "5px", opacity: "0.9"}}
        />}

        { props.showList && <ul
            className={"title-filter-list"}
            >
            {filter.placesList.map(place => {
                return <li
                    className={"title-filter-list-li"}
                    onClick={props.onClickItem}
                           onMouseOver={() => {
                               hideList = false;
                               props.onMouseOver()
                           }}

                >{place.name}</li>
            })}
        </ul>}
    </div>

}


function SubTitle(props) {

    return (
        <div className="sub-title" style={props.style}>
            <h1>{props.text}</h1>
            <div className="title-hr"/>
        </div>
    );
}

export default function Title(props) {

    console.log("2___*shift title filters* typeof: " + typeof props.filters);
    console.log("2___*shift title filters*: " + props.filters);
    if (props.filters) console.log("2___*shift title filters list*: " + Object.values(props.filters));

    return (
        <div className="title" style={props.style}>
            <h1>{props.text}</h1>
            {props.filters && props.filters.map((filter) => {
                return mapFilters(filter, props)
            })}
            <div className="title-hr"/>
        </div>
    );
}

export {SubTitle};