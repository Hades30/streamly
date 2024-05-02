// SideBar.tsx
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const SideBar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button>
          <ListItemText primary="Sidebar Item 1" />
        </ListItem>
        {/* Add more sidebar items as needed */}
      </List>
    </Drawer>
  );
};

export default SideBar;
