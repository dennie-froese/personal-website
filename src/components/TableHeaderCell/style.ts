import { secondaryTextColor, fontStyle } from "../../constants/styles";

const style = {
  text: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    fontFamily: fontStyle,
    fontSize: 15,
    color: secondaryTextColor,
    fontWeight: "bold",
    justifyContent: "center",
    padding: 10
  }
} as { [key: string]: React.CSSProperties };

export default style;
