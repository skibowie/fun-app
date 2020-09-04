import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "../styles.scss";


export const SimpleMenu = ({onChange}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const changeView = (value) => {
      onChange(value)
      setAnchorEl(null);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
      console.log('logout!!')
  }

  return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Otwórz Menu
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          <MenuItem onClick={() => changeView("recipes")}>Przepisy</MenuItem>
          <MenuItem onClick={() => changeView("calculator")}>Kalkulator </MenuItem>
          <MenuItem onClick={() => changeView("calendar")}>Kalendarz</MenuItem>
          <MenuItem onClick={() => changeView("contact")}>Kontakt</MenuItem>
          <MenuItem onClick={logout}>Wyloguj</MenuItem>

        </Menu>
      </div>
  );
}