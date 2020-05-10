import { darkblue } from "./constants/styles";

const style = {
  container: {
    textalign: "center",
    backgroundColor: darkblue
    // display: "flex"
  },
  textHeader: {
    color: "white",
    backgroundColor: "grey",
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30
  }
} as { [key: string]: React.CSSProperties };

export default style;
