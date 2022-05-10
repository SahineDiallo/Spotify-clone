import React from 'react'
import './SidebarOptions.css';
// import {UseDataLayerValue} from './DataLayerProvider';

function SidebarOptions({title, Icon}) {

  return (
    
    <div className="sidebaroptions">
        <p  className="sidebaroptions__link" >{Icon && <Icon className="sidebaroptions__icon" />}
            <span>{title}</span>
        </p>
    </div>
  )
}

export default SidebarOptions