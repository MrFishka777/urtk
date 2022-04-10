import React, {useState} from 'react';
import {Link} from "react-router-dom";

const GroupList = (props) => {
  
    // eslint-disable-next-line no-unused-vars
  const [data] = useState(props.data);
    // eslint-disable-next-line no-unused-vars
    const [dataFiltered, setDataFiltered] = useState(props.data);

  const filter = (e) => {
      let text = e.target.value;
      let filter = [];
      // eslint-disable-next-line no-unused-vars,array-callback-return
      data.filter(item => {
          if (item.title.toLowerCase().indexOf(text.toLowerCase()) > -1) {
              filter.push(item)
          }

      });
      setDataFiltered(filter);
  }

	return (
	   <div className="container">
        <div className="row mt-lg-n10 mt-md-n11 mt-n10">
          <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div className="card z-index-0">
              <div className="card-header text-center pt-4">
                <h5 className="card-text">Выберите группу</h5>
              </div>
              <div className="container-fluid" style={{marginBottom: '2rem'}}>
                <button type="button" className="btn bg-gradient-dark w-100 mt-4 mb-0" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-down align-middle"><polyline points="7 13 12 18 17 13" /><polyline points="7 6 12 11 17 6" /></svg>
                </button>
                <button className="navbar-toggler shadow-none ms-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="navbar-collapse ps collapse" id="navigation">
                  <svg style={{color: '#3e6ca8'}} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search align-middle"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                  <input id="search" style={{color: '#3e6ca8', fontSize: '16px'}} className="navbar-toggler shadow-none ms-2 collapsed" type="text" placeholder="Поиск" onChange={filter}/>
                  <ul id="group" className="navbar-nav mx-auto">
                    {dataFiltered.map((group) =>
                        
                        <li id={group.group} className="nav-item" key={group.id} >
                              <Link className="nav-link me-2" style={{color: '#3e6ca8'}} to={"/"+group.group}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users align-middle"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                {group.title}
                              </Link>
                            </li>
                    )}
                  </ul>
                  <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}>
                    <div className="ps__thumb-x" tabIndex={0} style={{left: '0px', width: '0px'}} />
                  </div>
                  <div className="ps__rail-y" style={{top: '0px', right: '0px'}}>
                    <div className="ps__thumb-y" tabIndex={0} style={{top: '0px', height: '0px'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
};
//onClick={() => getWeek(group.group)}

export default GroupList;