import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../css/swiper.css';
import DaySchedulItem from "./DaySchedulItem";
// eslint-disable-next-line no-unused-vars

const ScheduleList = ({schedules}) => {

    return (
        <Swiper className="slider">
        {schedules.map((day, index) =>

        <SwiperSlide key={index} className="container">

            <div className="row mt-lg-n10 mt-md-n11 mt-n10">
                <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                    <div className="card z-index-0">
                        <input id='1' hidden defaultValue={day.title} />
                        <div className="card-body">
                            {/* eslint-disable-next-line array-callback-return */}
                            {day.pairs.map((sched, index) =>{
                                if(sched == null){
                            }else{
                                return(
                                    <DaySchedulItem key={index} time={sched.time} lesson={sched.lesson} teacher={sched.teacher} classroom={sched.classroom}/>

                                );
                            }}
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
            )}
        </Swiper>
    );
};

export default ScheduleList;