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
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={()=>navigate('/')} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} onClick={()=>navigate('/favorite')}/>
      <BottomNavigationAction label="Person" icon={<PersonIcon />} onClick={()=>navigate('/profile')}/>
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
