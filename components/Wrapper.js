import NavBar from "./NavBar";
import { Box } from "@mui/system";

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
