import { secondaryColor, secondaryTextColor } from "../../constants/styles";

const style = {
  container: {
    backgroundColor: secondaryColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10%",
    paddingBottom: "10%"
  },
  subContainer: {
    width: "50%"
  },
  textHeader: {
    fontSize: 30,
    color: secondaryTextColor,
    fontWeight: "bold",
    textAlign: "center"
  },
  textMain: {
    fontSize: 20,
    color: secondaryTextColor,
    textAlign: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
