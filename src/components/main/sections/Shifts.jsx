import React from 'react';
import Title, {SubTitle} from "../title/Title";
import ShiftPanel from "../panel/ShiftPanel";
import {useSelector} from "react-redux";


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

    return <div>
        <Title text="Smeny" filters={shiftTitleFilters}/>
        <SubTitle text="Prebiehajúce"/>
        <ShiftPanel />



    </div>
}