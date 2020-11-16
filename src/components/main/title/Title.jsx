import React from 'react';


function mapFilter(filter, props, style) {

    console.log("places list: " + Object.values(filter.list));
    var hideList = true;

    var selectedPlaceId = filter.selectedPlaceId; //vybrane id co sa ma zobraziť
    var filteredPlace = filter.list.filter(place => place.id === selectedPlaceId); //ak nejaka polozka ma to id tak sa vyberie
    var placeName = filteredPlace.length > 0 ? filteredPlace[0].name : null;
    return <div
        className={"title-filter"}
        style={style}

        onMouseOver={() => {
            hideList = false;
            props.onMouseOver()
        }}
        onMouseOut={() => {
            setTimeout(() => {
                hideList && props.onMouseOut()
            }, 350);
        }}
    >
        <div style={{textAlign: "right"}}>{placeName}
        &nbsp;&nbsp;
        {placeName && <img src="images/icons/icon-arrow-down.png"
                           style={{width: "12px", position: "relative", top: "5px", opacity: "0.9"}}/>}
        </div>

        {props.showList  && <ul
            className={"title-filter-list"}
        >
            {filter.list.map(place => {
                return <li
                    className={"title-filter-list-li"}
                    onClick={() => {
                        props.onClickItem(place.id)
                    }}
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
            {props.filter && mapFilter(props.filter, props)}
            <div className="title-hr"/>
        </div>
    );
}

export default function Title(props) {

    return (
        <div className="title" style={props.style}>
            <h1>{props.text}</h1>
            {props.filter && mapFilter(props.filter, props, {top: "10px", zIndex: 21})}
            <div className="title-hr"/>
        </div>
    );
}

export {SubTitle};