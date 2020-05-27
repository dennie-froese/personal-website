import { secondaryTextColor, fontStyle } from "../../constants/styles";

const style = {
  text: {
    fontFamily: fontStyle,
    color: secondaryTextColor,
    textAlign: "center",
    margin: "15px"
  }
} as { [key: string]: React.CSSProperties };

export default style;
