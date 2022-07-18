// ? Next.js Hooks
import { useRouter } from "next/router";

// ? Material UI Components
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

// ? Material UI Icons
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// * Actions for the SpeedDial Component

const actions = [
  {
    icon: <AddCircleOutlineTwoToneIcon />,
    name: "Create a Task",
    route: "/create",
  },
  {
    icon: <LinkedInIcon />,
    name: "View Developer's Profile",
    route: "https://www.linkedin.com/in/julian-swerdlin/",
  },
];

// * SpeedDial Component

const SpeedDialComponent = () => {

  // Initialize Router
  const router = useRouter();

  // * Render the speed dial
  return (
    <Box>
      <SpeedDial
        ariaLabel="Notes Button"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<CreateOutlinedIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              router.push(action.route);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SpeedDialComponent;
