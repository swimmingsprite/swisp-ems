import React from 'react';
import Title, {SubTitle} from "../title/Title";
import ShiftPanel from "../panel/ShiftPanel";
import {useDispatch, useSelector} from "react-redux";


export default function Shifts(props) {

    /*shifts state*/

    /*
    * redux ma zoznam miest
    *
    * */
    var dispatch = useDispatch();


    var shiftTitleFilters = useSelector((state) => {
        var selectedPlaceId = state.shiftReducer.selectedPlaceId
        if (selectedPlaceId === null) {
            selectedPlaceId = state.userReducer.place.id;
            dispatch({type: "CURRENT_PLACE_CHANGE", selectedPlaceId: state.userReducer.place.id})
        }
        return [
            {
                selectedPlaceId: selectedPlaceId,
                list: state.placeReducer
            },
            {
                selectedPlaceId: selectedPlaceId,
                list: [{name: "Gogoľova", id: selectedPlaceId}, {name: "Mimomestská", id: selectedPlaceId}]
            }
        ]
    })

    /*[{

    selectedId: "Kaufland Slovenská,
    list: [{name: "Kaufland Slovenská", id: 554451}] //list miest, z reduxu
}]*/

    console.log("___*shift title filters* typeof: " + typeof shiftTitleFilters);
    console.log("___*shift title filters*: " + shiftTitleFilters);
    console.log("___*shift title filters list*: " + shiftTitleFilters.list);
    var showList = useSelector((state) => {
        return state.shiftReducer.headerFilterHover;
    })

    //todo fix multiple filters bug

    return <div>
        <Title text="Smeny"
               filters={shiftTitleFilters}
               onClickItem={(newId) => {
                   dispatch({type: "CURRENT_PLACE_CHANGE", selectedPlaceId: newId});
                   dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilterHover: false})
               }}
               onMouseOver={() => {
                   dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilterHover: true})
               }}
               onMouseOut={() => {
                   dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilterHover: false})
               }}
               showList={showList}
        />
        <SubTitle text="Prebiehajúce"/>
        <ShiftPanel/>


    </div>
}