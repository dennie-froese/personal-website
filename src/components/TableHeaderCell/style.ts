import { secondaryTextColor, fontStyle } from "../../constants/styles";

const style = {
  text: {
    fontFamily: fontStyle,
    color: secondaryTextColor,
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: 20,
    margin: 25
  }
} as { [key: string]: React.CSSProperties };

export default style;
