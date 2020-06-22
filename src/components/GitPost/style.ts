import { primaryColor } from "../../constants/styles";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    padding: 5
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid",
    borderColor: primaryColor,
    padding: 10,
    borderRadius: 10
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10
  }
} as { [key: string]: React.CSSProperties };

export default style;
