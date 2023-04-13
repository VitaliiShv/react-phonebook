import { Button, styled } from "@mui/material";

const SubmitButton = ({ type = "button", onClick, disabled, children }) => {
  const StyledButton = styled(Button)({
    display: "inline-flex",
    marginLeft: "20px",
    backgroundColor: "#edb51a",
    color: "#000000",
    textTransform: "uppercase",
    padding: "5px 15px",
    border: "1px solid #000000",
    borderRadius: "4px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
    "&:hover": {
      backgroundColor: "transparent",
      transition:
        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
    },
  });

  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default SubmitButton;
