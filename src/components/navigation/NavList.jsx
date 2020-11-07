import React from 'react';


export default function NavList() {
  /*const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };*/

  return (<ul className="nav-ul">
    <li className="nav-li">Domov</li>
    <li className="nav-li">Zamestnanci</li>
    <li className="nav-li">Smeny</li>
    <li className="nav-li">Udalosti</li>
    <li className="nav-li">Ponuky práce</li>
    <li className="nav-li">Správy</li>
    <li className="nav-li">Súhrn</li>
    <li className="nav-li">Management</li>
  </ul>)
}