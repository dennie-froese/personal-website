import { secondaryColor } from "../../constants/styles";

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
    padding: 15
  },
  logo: {
    width: "100px"
  },
  subContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logosContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  logos: {
    display: "flex",
    flex: 1,
    width: 40,
    height: 40,
    padding: 10
  },
  logoGmail: {
    display: "flex",
    flex: 1,
    width: 38,
    height: 30,
    padding: 10
  },
  avatar: {
    width: "250px",
    padding: 20
  }
} as { [key: string]: React.CSSProperties };

export default style;
