import { TextField, withStyles, Switch } from "@material-ui/core";

export const CssTextField = withStyles({
  root: {
    "& label": {
      color: "#C0C0C0",
    },
    "& label.Mui-focused": {
      color: "#5B5B5B",
      fontWeight: 500,
    },
    "& label.Mui-error": {
      color: "#F44336",
    },
    "& .MuiOutlinedInput-root": {
      "& input": {
        color: "#C0C0C0",
        fontWeight: 500,
        fontSize: 12,
        height: 19,
      },
      "& input:focus": {
        color: "#000000",
        fontWeight: 500,
        fontSize: 12,
      },
      "&.Mui-error input": {
        color: "#F44336",
      },
      "& fieldset": {
        borderRadius: 5,
        borderColor: "#D4D4D4",
      },
      "&:hover fieldset": {
        borderColor: "#5B5B5B",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#5B5B5B",
      },
      "&.Mui-error fieldset": {
        borderColor: "#F44336",
      },
    },
  },
})(TextField);

export const SearchTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& input": {
        fontWeight: 400,
      },
      "& fieldset": {
        color: "#000000",
        fontWeight: 400,
        borderRadius: 7,
        borderColor: "transparent",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
})(TextField);

export const CssSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 33,
    padding: 2,
    display: "flex",
  },
  switchBase: {
    padding: 5,
    color: "#FFFFFF",
    "&$checked": {
      transform: "translateX(28px)",
      color: "#215BA5",
      "& + $track": {
        opacity: 1,
        backgroundColor: "#F1F2F6",
        borderColor: "#F1F2F6",
      },
    },
  },
  thumb: {
    width: 23,
    height: 23,
    boxShadow: "none",
  },
  track: {
    border: 0,
    borderRadius: 16,
    backgroundColor: "#F1F2F6",
  },
  checked: {},
}))(Switch);
