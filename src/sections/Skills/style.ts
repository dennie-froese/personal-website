import { secondaryColor, secondaryTextColor } from "../../constants/styles";

const style = {
  container: {
    backgroundColor: secondaryColor,
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid",
    borderColor: "lightgrey",
    paddingTop: "10%",
    paddingBottom: "10%",
    paddingLeft: "20%",
    paddingRight: "20%"
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "5%",
    border: "2px solid",
    borderColor: "lightgrey",
    borderRadius: "10px"
  }
} as { [key: string]: React.CSSProperties };

export default style;
