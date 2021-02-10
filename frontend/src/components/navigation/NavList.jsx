import React from 'react';
import {useStore} from "react-redux";


export default function NavList() {
  /*const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };*/
  var store = useStore();

  return (<ul className="nav-ul">
    <li className="nav-li" onClick={() => {store.dispatch({type: "CURRENT_SECTION", currentSection: "Home"})}}>Domov</li>
    <li className="nav-li" onClick={() => {store.dispatch({type: "CURRENT_SECTION", currentSection: "Employees"})}}>Zamestnanci</li>
    <li className="nav-li" onClick={() => {store.dispatch({type: "CURRENT_SECTION", currentSection: "Shifts"})}}>Zmeny</li>
    <li className="nav-li">Udalosti</li>
    <li className="nav-li">Ponuky práce</li>
    <li className="nav-li">Správy</li>
    <li className="nav-li">Súhrn</li>
    <li className="nav-li">Management</li>
  </ul>)
}