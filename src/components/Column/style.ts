import { secondaryTextColor, primaryColor } from "../../constants/styles";

const style = {
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "45%"
  },
  header: {
    fontSize: 30,
    color: secondaryTextColor,
    fontWeight: "bold",
    textAlign: "center"
  },
  subheader: {
    fontSize: 22,
    color: primaryColor,
    fontStyle: "italic",
    textAlign: "center"
  },
  main: {
    fontSize: 20,
    color: secondaryTextColor,
    textAlign: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
