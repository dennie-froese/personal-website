import { secondaryColor, secondaryTextColor } from "../../constants/styles";

const style = {
  container: {
    backgroundColor: secondaryColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10%",
    paddingBottom: "10%"
  },
  subContainer: {
    width: "50%"
  },
  textHeader: {
    fontSize: 30,
    color: secondaryTextColor,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
