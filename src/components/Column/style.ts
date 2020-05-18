import { secondaryTextColor } from "../../constants/styles";

const style = {
  column: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-around"
  },
  textHeader: {
    fontSize: 30,
    color: secondaryTextColor,
    fontWeight: "bold",
    textAlign: "center",
    padding: "10"
  },
  textMain: {
    fontSize: 20,
    color: secondaryTextColor,
    textAlign: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
