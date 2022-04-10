import React, {useState} from 'react';

const DaySchedulItem = ({key, time, lesson, teacher, classroom}) => {
    time = time.split('-');
    const startTime = useState(time[0]);
    const endTime = useState(time[1]);
    return (
       <div>
        <div key={key} className="d-flex">
            <h6 className="mb-0 me-3">{startTime}<br/>{endTime}</h6>
            <h6 className="mb-0">{lesson}<br/>
                <small className="text-secondary font-weight-normal">{teacher}</small>
            </h6>
            <div className="bg-gradient-dark ms-auto"
                 style={{borderRadius: '10px', padding: '0.9rem', height: 'max-content'}}>
                {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                <a href="javascript:" className="ms-auto" data-bs-toggle="tooltip"
                   data-bs-placement="top" title="Это аудитория" style={{color: 'white'}}>
                    {classroom}
                </a>
            </div>
        </div>
        <hr className="horizontal dark"/>
      </div>
    );
};

export default DaySchedulItem;