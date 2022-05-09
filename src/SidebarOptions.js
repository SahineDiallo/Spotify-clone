import React from 'react'
import './SidebarOptions.css';

function SidebarOptions({title, Icon}) {
  return (
    
    <div className="sidebaroptions">
        <p className="sidebaroptions__link" >{Icon && <Icon className="sidebaroptions__icon" />}
            <span>{title}</span>
        </p>
    </div>
  )
}

export default SidebarOptions