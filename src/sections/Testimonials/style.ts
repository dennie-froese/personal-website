import { secondaryColor } from "../../constants/styles";

const style = {
  container: {
    backgroundColor: secondaryColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10%",
    paddingBottom: "10%",
    borderBottom: "1px solid",
    borderColor: "lightgrey"
  },
  subContainer: {
    width: "50%"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
