import { secondaryTextColor } from "../../constants/styles";

const style = {
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textHeader: {
    fontSize: 30,
    color: secondaryTextColor,
    fontWeight: "bold",
    padding: "10"
  },
  textMain: {
    fontSize: 20,
    color: secondaryTextColor
  }
} as { [key: string]: React.CSSProperties };

export default style;
