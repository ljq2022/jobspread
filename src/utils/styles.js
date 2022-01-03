import { CSSProperties } from "react";
import Modal from "react-modal";
import { Colors } from "./colors";

export const Styles = {
  textOverflowEllipsis: {
    textOverflow: "ellipsis",
    display: "block",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  modal: {
    content: {
      top: "20%",
      left: "20%",
      bottom: "20%",
      right: "20%",
      borderWidth: 0,
      boxShadow: "0px 0px 40px 0px rgba(0,0,0,0.1)",
      borderRadius: 10,
      overflowY: "auto",
      zIndex: 100,
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.1)",
      zIndex: 90,
    },
  },
  modalHeader: {
    height: 80,
    backgroundColor: Colors.white,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    boxShadow: "0px 3px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  modalCloseBtn: {
    position: "absolute",
    top: 25,
    left: 20,
    border: "none",
    outline: "none",
    backgroundColor: Colors.transparent,
    fontFamily: "Manrope",
    fontWeight: 600,
    color: Colors.darkGray1,
    cursor: "pointer",
    padding: 5,
  },
  modalInnerContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflowY: "auto",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 20,
  },
  modalSubheaderText: {
    fontSize: 20,
    fontWeight: 900,
    lineHeight: 1.6,
    display: "inline-block",
    marginBottom: 10,
  },
  modalDescriptionText: {
    fontSize: 16,
    color: Colors.darkBlackBlueHint,
    whiteSpace: "pre-wrap",
  },
};
