import React, {useState} from 'react';
import Title, {SubTitle} from "../title/Title";
import ShiftPanel from "../panel/ShiftPanel";
import {useDispatch, useSelector} from "react-redux";
import {timestampsToDateRange} from "../../../logic/time/timeUtils";
import ShiftSchedulerPanel from "../panel/ShiftSchedulerPanel";


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
            selectedDepartmentId = 0//list[0].id;
            dispatch({type: "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE", currentShiftSubHeaderDepartmentId: selectedDepartmentId})
        }

        return  {
                selectedPlaceId: selectedDepartmentId,
                list: [{name: "všetky oddelenia", id: 0} ,...list]
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

    var [showCalendarSubHeaderList, setShowCalendarSubHeaderList] = useState(false);

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


        {/*<SubTitle text="Plánovanie"*/}
        {/*          // secondText={currentViewTimeRange}*/}
        {/*          filter={shiftSubHeaderFilter}*/}
        {/*          onClickItem={(newId) => {*/}
        {/*              dispatch({type: "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE", currentShiftSubHeaderDepartmentId: newId});*/}
        {/*              dispatch({type: "CURRENT_SHIFT_SUBHEADER_HOVER_CHANGE", currentShiftsSubHeaderFilterHover: false})*/}
        {/*          }}*/}
        {/*          onMouseOver={() => {*/}
        {/*              console.log("***********setting cal to true")*/}
        {/*              setShowCalendarSubHeaderList(true);*/}
        {/*          }}*/}
        {/*          onMouseOut={() => {*/}
        {/*              console.log("***********setting cal to false")*/}
        {/*              setShowCalendarSubHeaderList(false);*/}
        {/*          }}*/}
        {/*          showList={showCalendarSubHeaderList}*/}
        {/*/>*/}
        {/*<ShiftSchedulerPanel />*/}


    </div>
}