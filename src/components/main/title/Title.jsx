import React, {useState} from 'react';
import {handleOnMouseOut, handleOnMouseOver, isVisibleList} from "../../../logic/title/titleFilter";


function SubTitle(props) {

    var [hovers, setHovers] = useState([])
    if (hovers.filter(h => h.id === props.id).length < 1) setHovers([...hovers, {id: props.id, hover: false}]);
    let showList = isVisibleList(hovers, props.id);


    return (
        <div className="sub-title" style={props.style}>
            <h1>{props.text}</h1>

            {props.filter && mapFilter(
                props.filter,
                () => handleOnMouseOver(props.id, hovers, setHovers),
                () => handleOnMouseOut(props.id, hovers, setHovers),
                props.onClickItem,
                showList
            )}

                <div className="title-hr"/>
            {props.secondText && <p
                style={{
                    position: "relative",
                    top: "-36px",
                    fontSize: "0.95rem",
                    textAlign: "right"
                }}
            >{props.secondText}</p>}

        </div>
    );
}

export default function Title(props) {
    var [hovers, setHovers] = useState([{id: null, hover: false}])
    if (hovers.filter(h => h.id === props.id).length < 1) setHovers([...hovers, {id: props.id, hover: false}]);
    let showList = isVisibleList(hovers, props.id);

    return (
        <div className="title" style={props.style}>
            <h1>{props.text}</h1>

            {props.filter && mapFilter(
                props.filter,
                () => handleOnMouseOver(props.id, hovers, setHovers),
                () => handleOnMouseOut(props.id, hovers, setHovers),
                props.onClickItem,
                showList,
                {top: "10px", zIndex: 21}
            )}

            <div className="title-hr"/>
        </div>
    );
}


function mapFilter(filter, handleOnMouseOver, handleOnMouseOut, onClick, showList, style) {
    var hideList = false;

    var selectedPlaceId = filter.selectedPlaceId; //vybrane id co sa ma zobraziť
    var filteredPlace = filter.list.filter(place => place.id === selectedPlaceId); //ak nejaka polozka ma to id tak sa vyberie
    var placeName = filteredPlace.length > 0 ? filteredPlace[0].name : null; //pouzije sa jej nazov vo filtri

    return <div
        className={"title-filter"}
        style={style}


        onMouseOver={() => {
            console.log("HEADER MOUSE OVER")
            hideList = false;
            handleOnMouseOver();
        }}
        onMouseOut={() => {
            console.log("HEADER MOUSE OUT")
            hideList = true
            setTimeout(() => {
                hideList && handleOnMouseOut()
            }, 350);
        }}
    >

        <div style={{textAlign: "right"}}>
            {placeName}
            &nbsp;&nbsp;
            {placeName && <img src="images/icons/icon-arrow-down.png"
                               style={{width: "12px", position: "relative", top: "5px", opacity: "0.9"}}/>}
        </div>

        {showList && <ul
            className={"title-filter-list"}>
            {filter.list.
            filter((place => place.id !== selectedPlaceId))
                .map(place => {
                    return <li
                        key={place.id}
                        className={"title-filter-list-li"}
                        onClick={() => {
                            handleOnMouseOut();
                            onClick(place.id);
                        }}
                        onMouseOver={() => {
                            console.log("LIST MOUSE OVER")
                            hideList = false;
                            handleOnMouseOver();
                        }}

                        onMouseOut={() => {
                            console.log("LIST MOUSE OUT")
                            hideList = true
                            setTimeout(() => {
                                hideList && handleOnMouseOut()
                            }, 350);
                        }}

                    >{place.name}</li>
                })}
        </ul>}

    </div>


}



export {SubTitle};