import { secondaryTextColor, fontStyle } from "../../constants/styles";

const style = {
  text: {
    fontFamily: fontStyle,
    color: secondaryTextColor,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    padding: 10
  }
} as { [key: string]: React.CSSProperties };

export default style;
