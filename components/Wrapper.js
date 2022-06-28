import NavBar from "./NavBar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Box, Container } from "@mui/system";

const Wrapper = (props) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <NavBar />
        {props.children}
      </Box>
    </>
  );
};

export default Wrapper;
