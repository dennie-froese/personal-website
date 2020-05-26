import { secondaryColor, secondaryTextColor } from "../../constants/styles";

const style = {
  container: {
    backgroundColor: secondaryColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "10%",
    paddingBottom: "10%"
  },
  textFeedback: {
    fontSize: 20,
    color: secondaryTextColor,
    textAlign: "center"
  },
  logo: {
    width: "10%",
    height: "10%"
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: secondaryTextColor,
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    color: secondaryTextColor,
    textAlign: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
