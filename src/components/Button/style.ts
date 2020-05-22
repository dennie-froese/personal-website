import { primaryColor } from "../../constants/styles";

const style = {
  button: {
    border: `3px solid ${primaryColor}`,
    borderRadius: 30,
    paddingLeft: "0.8%",
    paddingRight: "0.8%"
  },
  text: {
    fontWeight: "bold"
  }
} as { [key: string]: React.CSSProperties };

export default style;
