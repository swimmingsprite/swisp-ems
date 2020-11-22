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

    function getCurrentPlaceDepartments(state) {
        return [...state.placeReducer
            .filter(p => p.id === state.shiftReducer.selectedPlaceId)
            .map(p => p.departments)[0]]
    }

    var shiftSubHeaderFilter = useSelector((state) => {
        var list = getCurrentPlaceDepartments(state);

        var selectedDepartmentId = state.shiftReducer.currentShiftSubHeaderDepartmentId
        if (selectedDepartmentId === null) {
            selectedDepartmentId = 0
            dispatch({
                type: "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE",
                currentShiftSubHeaderDepartmentId: selectedDepartmentId
            })
        }

        return {
            selectedPlaceId: selectedDepartmentId,
            list: [{name: "všetky oddelenia", id: 0}, ...list]
        }
    })

    var schedulerSubHeaderFilter = useSelector((state) => {
        var list = getCurrentPlaceDepartments(state);

        var selectedDepartmentId = state.shiftReducer.schedulerSubHeaderDepartmentId

        if (selectedDepartmentId === null) {
            selectedDepartmentId = list[0].id
            dispatch({
                type: "SCHEDULER_SUBHEADER_DEPARTMENT_CHANGE",
                schedulerSubHeaderDepartmentId: selectedDepartmentId
            })
        }

        return {
            selectedPlaceId: selectedDepartmentId,
            list: [...list]
        }
    })


    var currentView = useSelector(state => {
        return state.shiftReducer.currentView
    })


    var currentViewTimeRange = timestampsToDateRange(currentView.startTimestamp, currentView.endTimestamp)

    return <div>
        <Title text="Smeny"
               id={165698563265}
               filter={shiftHeaderFilter}
               onClickItem={(newId) => {
                   dispatch({type: "CURRENT_PLACE_CHANGE", selectedPlaceId: newId});
                   dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilterHover: false})
                   dispatch({
                       type: "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE",
                       currentShiftSubHeaderDepartmentId: null
                   });
               }}
        />
        <SubTitle text="Prebiehajúce"
                  id={8645165468468}
                  secondText={currentViewTimeRange}
                  filter={shiftSubHeaderFilter}
                  onClickItem={(newId) => {
                      dispatch({
                          type: "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE",
                          currentShiftSubHeaderDepartmentId: newId
                      });
                  }}
        />
        <ShiftPanel/>


        <SubTitle text="Plánovanie"
            // secondText={currentViewTimeRange}
                  id={45454548276845}
                  filter={schedulerSubHeaderFilter}
                  onClickItem={(newId) => {
                      dispatch({
                          type: "SCHEDULER_SUBHEADER_DEPARTMENT_CHANGE",
                          schedulerSubHeaderDepartmentId: newId
                      });
                  }}
        />
        <ShiftSchedulerPanel/>


    </div>
}