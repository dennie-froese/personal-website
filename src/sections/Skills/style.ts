import { secondaryColor } from "../../constants/styles";

const style = {
  container: {
    backgroundColor: secondaryColor,
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid",
    borderColor: "lightgrey",
    paddingTop: "10%",
    paddingBottom: "10%",
    paddingLeft: "10%",
    paddingRight: "10%"
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    border: "2px solid",
    borderColor: "lightgrey",
    borderRadius: "10px",
    paddingTop: "5%",
    paddingBottom: "5%"
  }
} as { [key: string]: React.CSSProperties };

export default style;
