import React from 'react';
import Title, {SubTitle} from "../title/Title";
import ShiftPanel from "../panel/ShiftPanel";
import {useDispatch, useSelector} from "react-redux";
import {timestampsToDateRange} from "../../../logic/time/timeUtils";


export default function Shifts(props) {

    var dispatch = useDispatch();

    //filter for subheader
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

    //filter for subheader
    var shiftSubHeaderFilter = useSelector((state) => {
        var list = [...state.placeReducer.filter(p => p.id === state.shiftReducer.selectedPlaceId)
            .map(p => p.departments)[0]
        ]

        var selectedDepartmentId = state.shiftReducer.currentShiftSubHeaderDepartmentId
        if (selectedDepartmentId === null) {
            selectedDepartmentId = list[0].id;
            dispatch({type: "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE", currentShiftSubHeaderDepartmentId: selectedDepartmentId})
        }

        return  {
                selectedPlaceId: selectedDepartmentId,
                list: list
            }

    })

    var showHeaderFilterList = useSelector((state) => {
        return state.shiftReducer.headerFilterHover;
    })

    var showCurrentShiftsSubHeaderFilterList = useSelector((state) => {
        return state.shiftReducer.currentShiftsSubHeaderFilterHover;
    })

    var currentView = useSelector(state => {
        return state.shiftReducer.currentView
    })

    console.log("C VIEW start TIMESTAMP: "+currentView.startTimestamp);
    console.log("C VIEW end TIMESTAMP: "+currentView.endTimestamp);

    var currentViewTimeRange = timestampsToDateRange(currentView.startTimestamp, currentView.endTimestamp)

    return <div>
        <Title text="Smeny"
               filter={shiftHeaderFilter}
               onClickItem={(newId) => {
                   dispatch({type: "CURRENT_PLACE_CHANGE", selectedPlaceId: newId});
                   dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilterHover: false})
                   dispatch({type: "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE", currentShiftSubHeaderDepartmentId: null});
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
                  secondText={currentViewTimeRange}
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