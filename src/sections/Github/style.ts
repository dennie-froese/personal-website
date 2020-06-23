import { secondaryColor } from "../../constants/styles";

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
    flexDirection: "column",
    maxWidth: "70%",
    maxHeight: 700,
    overflowY: "auto",
    backgroundColor: "lightgrey",
    borderRadius: 10
  }
} as { [key: string]: React.CSSProperties };

export default style;
