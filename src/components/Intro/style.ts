const style = {
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10%",
    paddingBottom: "10%"
  },
  subContainer: {
    width: "50%",
    paddingBottom: 40
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20
  },
  textMain: {
    fontSize: 20,
    color: "black",
    textAlign: "center"
  }
} as { [key: string]: React.CSSProperties };

export default style;
