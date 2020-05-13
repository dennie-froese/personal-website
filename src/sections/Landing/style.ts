import { secondaryColor, secondaryTextColor } from "../../constants/styles";

const style = {
  container: {
    backgroundColor: secondaryColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "10%"
  },
  headerContainer: {
    backgroundColor: secondaryColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2%"
  },
  logo: {
    width: "10%",
    height: "10%"
  },
  subContainer: {
    width: "50%",
    paddingBottom: 40
  },
  textHeader: {
    fontSize: 40,
    color: secondaryTextColor,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20
  },
  textMain: {
    fontSize: 20,
    color: secondaryTextColor,
    textAlign: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
