import { primaryColor, primaryTextColor } from "../../constants/styles";

const style = {
  container: {
    backgroundColor: primaryColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10%",
    paddingBottom: "10%"
  },
  subContainer: {
    width: "50%",
    paddingBottom: "10%"
  },
  textHeader: {
    fontSize: 30,
    color: primaryTextColor,
    fontWeight: "bold",
    textAlign: "center"
  },
  textMain: {
    fontSize: 20,
    color: primaryTextColor,
    textAlign: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
