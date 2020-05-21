import { primaryColor } from "../../constants/styles";

const style = {
  button: {
    border: `3px solid ${primaryColor}`,
    borderRadius: 30
  },
  text: {
    fontWeight: "bold"
  }
} as { [key: string]: React.CSSProperties };

export default style;
