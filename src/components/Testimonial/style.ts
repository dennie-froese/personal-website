import { secondaryColor, secondaryTextColor } from "../../constants/styles";

const style = {
  container: {
    backgroundColor: secondaryColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "10%",
    paddingBottom: "10%"
  },
  imageWrap: {
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyItems: "center",
    width: "15%",
    height: "15%",
    backgroundColor: "white",
    overflow: "hidden"
  },
  logo: {
    width: "100%",
    height: "100%"
  },
  bottom: {
    paddingTop: 30
  }
} as { [key: string]: React.CSSProperties };

export default style;
