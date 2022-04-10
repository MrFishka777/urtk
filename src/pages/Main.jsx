import React, {useEffect, useState} from 'react';
import GroupList from "../components/GroupList";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Body from "../components/Body";
import Loader from "../components/Loader";
import { CSSTransition } from 'react-transition-group';

const Main = () => {
    const [groups, setGroups] = useState({});
    const [isLoading, setLoading] = useState(true);
    const getGroups = async () => {
        await fetch("https://timee.space/api/getGroups").then(res => res.json()).then(
            res => {
                setGroups(res);
                setLoading(false);
            }
        )
    }
    useEffect(() => {
        getGroups();
    }, [])
    return (
            <div>
                <CSSTransition
                        in={!isLoading}
                        timeout={500}
                        classNames="body"
                        unmountOnExit
                    ><Body>
                        <Nav/>
                        <Card title="Расписание УРТК" subtitle="Добро пожаловать!" >
                            <GroupList data={groups}/>
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
/*{isLoading
    ? <Loader/>
    : <Body>
        <Nav/>
        <Card title="Расписание УРТК" subtitle="Добро пожаловать!" >
            <GroupList data={groups}/>
        </Card>
    </Body>

}*/
export default Main;