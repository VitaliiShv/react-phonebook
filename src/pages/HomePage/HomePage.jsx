import { Container, Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#edebe6" }}>
      <Container
        sx={{ backgroundColor: "#ffeb5b", maxWidth: "600px", height: "100vh" }}
      >
        <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
          Home page
        </Typography>
        <Typography
          variant="h3"
          component="p"
          sx={{ textAlign: "center", marginTop: "40px" }}
        >
          To continue working with your contacts, please sign up or log in
        </Typography>
      </Container>
    </Box>
  );
};

export default HomePage;
