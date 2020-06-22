import { secondaryTextColor, fontStyle } from "../../constants/styles";

const style = {
  link: {
    fontFamily: fontStyle,
    color: "blue",
    textAlign: "left",
    textDecorationLine: "underline"
  }
} as { [key: string]: React.CSSProperties };

export default style;
