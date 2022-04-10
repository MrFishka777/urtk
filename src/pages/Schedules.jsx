import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Body from "../components/Body";
import ScheduleList from "../components/ScheduleList";
import Loader from "../components/Loader";
import {CSSTransition} from "react-transition-group";
import GroupList from "../components/GroupList";

const Schedules = () => {
    const group = useParams();
    const [isLoading, setLoading] = useState(true);
    const [schedule, setSchedule] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const schedulesFetch = async () => {
        await fetch("https://timee.space/api/getSchedule/"+group.group).then(res => res.json()).then(
            res => {
                setSchedule(res);
                setLoading(false);
            }
        )
    }

    useEffect(() => {
        schedulesFetch();
    }, [])


    return (
        <div>
            <CSSTransition
                in={!isLoading}
                timeout={500}
                classNames="body"
                unmountOnExit
            >
                <Body>
                    <Nav/>
                    <Card title="Пока в разработке" subtitle={`Группа: ${schedule.title}`} >
                        <ScheduleList schedules={schedule.schedule}/>
                    </Card>
                </Body>
            </CSSTransition>

            <CSSTransition
                in={isLoading}
                timeout={500}
                classNames="loader"
                unmountOnExit
            >
                <Loader/>
            </CSSTransition>
        </div>


    );
};

export default Schedules;