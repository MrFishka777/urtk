import React from 'react';

const Nav = () => {
    return (
        <nav id="logo_alfin_app"
             className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
            <div style={{marginTop: '10%'}} className="container">
                <a className="navbar-brand font-weight-bolder mb-2 text-white" href="https://vk.com/alfin_dk_dev">
                    ALFIN DK
                </a>
                <div className="form-check form-switch ps-0">
                    <a onClick="them()" className="btn"
                       style={{padding: '0.8rem', borderRadius: '5rem', backgroundColor: 'aliceblue'}}>
                        <svg style={{color: '#000', marginRight: '0px'}} xmlns="http://www.w3.org/2000/svg" width={16}
                             height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}
                             strokeLinecap="round" strokeLinejoin="round">
                            <circle cx={12} cy={12} r={5}/>
                            <line x1={12} y1={1} x2={12} y2={3}/>
                            <line x1={12} y1={21} x2={12} y2={23}/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1={1} y1={12} x2={3} y2={12}/>
                            <line x1={21} y1={12} x2={23} y2={12}/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;