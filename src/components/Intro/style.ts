const style = {
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "10%"
  },
  headerContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    alignItems: "center"
  },
  logo: { width: "10%", height: "10%" },
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
