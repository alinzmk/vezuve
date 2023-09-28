// SidebarItem.js
import React from "react";
import "../App.css"
// ...

const SidebarItem = ({ label, isActive, handleItemClick }) => {
    const handleClick = () => {
      handleItemClick(label);
    }
  
    return (
      <div className={`sidebar-item ${isActive ? 'active' : ''}`} onClick={handleClick}>
        {label}
      </div>
    );
  }
  
  export default SidebarItem;