import { primaryColor } from "../../constants/styles";

const style = {
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%"
  },
  subheader: {
    fontSize: 22,
    color: primaryColor,
    fontStyle: "italic",
    textAlign: "center",
    margin: "20px"
  },
  section: {
    paddingBottom: "25px"
  },
  logo: {
    width: "100px"
  }
} as { [key: string]: React.CSSProperties };

export default style;
