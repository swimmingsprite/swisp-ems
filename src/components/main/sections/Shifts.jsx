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


    var shiftHeaderFilter = useSelector((state) => {
        var selectedPlaceId = state.shiftReducer.selectedPlaceId
        if (selectedPlaceId === null) {
            selectedPlaceId = state.userReducer.place.id;
            dispatch({type: "CURRENT_PLACE_CHANGE", selectedPlaceId: state.userReducer.place.id})
        }
        return {
                selectedPlaceId: selectedPlaceId,
                list: state.placeReducer
            }

    })

    function isDepartmentInPlace(state, depId) {
        var place = state.placeReducer.filter(p => p.id === state.shiftReducer.selectedPlaceId)[0];
        if (place === undefined) return false;
        var departments = place.departments.filter(dep => dep === depId);
        return departments.length > 0;
    }

    var shiftSubHeaderFilter = useSelector((state) => {
        var list = [...state.placeReducer.filter(p => p.id === state.shiftReducer.selectedPlaceId)
            .map(p => {
                console.log("P JE: "+p.name);
                console.log("P departments length: "+p.departments.length);
                return p.departments})[0]
        ]


        var selectedDepartmentId = state.shiftReducer.currentShiftSubHeaderDepartmentId
        if (selectedDepartmentId === null /*|| !isDepartmentInPlace(state, selectedDepartmentId)*/ ) {
            selectedDepartmentId = list[0].id;
            dispatch({type: "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE", currentShiftSubHeaderDepartmentId: selectedDepartmentId})
        }

        /*ked department nepatri currrent place id nastav */

        var a =  {
                selectedPlaceId: selectedDepartmentId,
                list: list
            }
        console.log("koniec");
        return a;
    })

    console.log("LIST LENGTH JE: "+shiftSubHeaderFilter.list.length)
    console.log("LIST name JE: "+shiftSubHeaderFilter.list.length)

    shiftSubHeaderFilter.list.forEach(e => console.log("foreach: "+e.name))

    /*[{

    selectedId: "Kaufland Slovenská,
    list: [{name: "Kaufland Slovenská", id: 554451}] //list miest, z reduxu
}]*/

    /*console.log("___*shift title filters* typeof: " + typeof shiftTitleFilters);
    console.log("___*shift title filters*: " + shiftTitleFilters);
    console.log("___*shift title filters list*: " + shiftTitleFilters.list);*/
    var showHeaderFilterList = useSelector((state) => {
        return state.shiftReducer.headerFilterHover;
    })

    var showCurrentShiftsSubHeaderFilterList = useSelector((state) => {
        return state.shiftReducer.currentShiftsSubHeaderFilterHover;
    })

    //todo fix multiple filters bug

    return <div>
        <Title text="Smeny"
               filter={shiftHeaderFilter}
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
               showList={showHeaderFilterList}
        />
        <SubTitle text="Prebiehajúce"
                  filter={shiftSubHeaderFilter}
                  onClickItem={(newId) => {
                      dispatch({type: "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE", currentShiftSubHeaderDepartmentId: newId});
                      dispatch({type: "CURRENT_SHIFT_SUBHEADER_HOVER_CHANGE", currentShiftsSubHeaderFilterHover: false})
                  }}
                  onMouseOver={() => {
                      dispatch({type: "CURRENT_SHIFT_SUBHEADER_HOVER_CHANGE", currentShiftsSubHeaderFilterHover: true})
                  }}
                  onMouseOut={() => {
                      dispatch({type: "CURRENT_SHIFT_SUBHEADER_HOVER_CHANGE", currentShiftsSubHeaderFilterHover: false})
                  }}
                  showList={showCurrentShiftsSubHeaderFilterList}

        />
        <ShiftPanel/>


    </div>
}