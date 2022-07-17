import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import {useRouter} from 'next/router';

const actions = [
  {
    icon: <AddCircleOutlineTwoToneIcon />,
    name: "Create a Task",
    route: "/create",
  },
  { icon: <InfoOutlinedIcon />, name: "About the App", route: "/about" },
];

const SpeedDialComponent = () => {
  const router = useRouter();

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