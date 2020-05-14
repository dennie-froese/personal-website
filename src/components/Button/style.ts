import { primaryColor } from "../../constants/styles";

const style = {
  button: {
    border: `2px solid ${primaryColor}`,
    height: 50,
    width: "10%",
    borderRadius: 10
  }
} as { [key: string]: React.CSSProperties };

export default style;
