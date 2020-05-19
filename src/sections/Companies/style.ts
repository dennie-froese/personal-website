import { secondaryColor, secondaryTextColor } from "../../constants/styles";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: secondaryColor,
    paddingTop: "10%",
    paddingBottom: "10%",
    borderBottom: "1px solid",
    borderBottomColor: "lightgrey"
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%"
  },
  textHeader: {
    fontSize: 30,
    color: secondaryTextColor,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: "5%"
  },
  logo: {
    width: "25%",
    height: "25%",
    padding: "3%"
  }
} as { [key: string]: React.CSSProperties };

export default style;
