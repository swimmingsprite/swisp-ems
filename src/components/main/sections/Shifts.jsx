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

    var shiftTitleFilters = useSelector((state) => {
        var selectedPlaceId = state.shiftReducer.selectedPlaceId
        if (selectedPlaceId === null) selectedPlaceId = state.userReducer.place.id;
        return [{
            selectedPlaceId: selectedPlaceId,
            placesList: state.placeReducer
        }]
    })

        /*[{

        selectedId: "Kaufland Slovenská,
        list: [{name: "Kaufland Slovenská", id: 554451}] //list miest, z reduxu
    }]*/

    console.log("___*shift title filters* typeof: "+ typeof shiftTitleFilters);
    console.log("___*shift title filters*: "+ shiftTitleFilters);
    console.log("___*shift title filters list*: "+ shiftTitleFilters.placesList);
    var dispatch = useDispatch();
    var showList = useSelector((state) => {
        return state.shiftReducer.headerFilter.hover;
    })

    return <div>
        <Title text="Smeny"
               filters={shiftTitleFilters}
               // onClickItem={}
               onMouseOver={() => {dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilter: {hover: true, timeout: false}})}}
               onMouseOut={() => {dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilter: {hover: false, timeout: true }})}}
               /*onListOver={() => {dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilter: {hover: false, listHover: true}})}}
               onListOut={() => {dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilter: {hover: null, listHover: false}})}}*/
               showList={showList}
        />
        <SubTitle text="Prebiehajúce"/>
        <ShiftPanel />



    </div>
}