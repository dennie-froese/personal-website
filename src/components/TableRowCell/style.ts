import { secondaryTextColor, fontStyle } from "../../constants/styles";

const style = {
  text: {
    fontFamily: fontStyle,
    color: secondaryTextColor,
    textAlign: "center",
    fontSize: 12,
    padding: 10
  }
} as { [key: string]: React.CSSProperties };

export default style;
