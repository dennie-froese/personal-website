import { primaryColor } from "../../constants/styles";

const style = {
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "45%"
  },
  subheader: {
    fontSize: 22,
    color: primaryColor,
    fontStyle: "italic",
    textAlign: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
