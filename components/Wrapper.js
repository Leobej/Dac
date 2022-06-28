import NavBar from "./NavBar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Wrapper = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default Wrapper;
