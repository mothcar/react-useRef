import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0   }}
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction sx={{"&.Mui-selected":{color:'red'} }} label="Home" icon={<HomeIcon />} onClick={()=>navigate('/')} />
      <BottomNavigationAction sx={{"&.Mui-selected":{color:'red'} }} label="Favorite" icon={<FavoriteIcon />} onClick={()=>navigate('/favorite')}/>
      <BottomNavigationAction sx={{"&.Mui-selected":{color:'red'} }} label="Person" icon={<PersonIcon />} onClick={()=>navigate('/profile')}/>
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
