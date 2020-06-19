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
    maxWidth: "70%"
  },
  subContainerTable: {
    display: "flex",
    flexDirection: "column",
    maxHeight: 1000,
    overflowY: "auto"
  },
  table: {
    display: "flex",
    flex: 1
  },
  tableBody: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  }
} as { [key: string]: React.CSSProperties };

export default style;
