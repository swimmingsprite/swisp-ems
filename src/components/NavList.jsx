import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';



export default function NavList() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (<ul className="nav-ul">
    <li className="nav-li">Domov</li>
    <li className="nav-li">Zamestnanci</li>
    <li className="nav-li">Udalosti</li>
    <li className="nav-li">Ponuky práce</li>
    <li className="nav-li">Správy</li>
    <li className="nav-li">Súhrn</li>
    <li className="nav-li">Management</li>
  </ul>)
}