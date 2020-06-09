import { secondaryTextColor, fontStyle } from "../../constants/styles";

const style = {
  text: {
    fontFamily: fontStyle,
    color: secondaryTextColor,
    fontWeight: "bolder",
    textAlign: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
