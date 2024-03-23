import { Typography, Container, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { forwardRef } from "react";
import { teal } from "@mui/material/colors";
import { theme } from "../themes/theme";

export default forwardRef(function Home({}, ref) {
  const { homeRef, projectsRef } = ref;
  function scrollToProjects() {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Box
      ref={homeRef}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        minHeight: "92.65vh",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          flexDirection: "column",
          display: "flex",
          justify: "space-around",
          mx: { xs: 2, md: "20%" },
          p: { xs: 4, sm: 7, md: 10 },
          textAlign: "left",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: theme.palette.primary.main,
          borderRadius: "8px",
          height: 1 / 2,
        }}
      >
        <Typography
          variant="h1"
          align="left"
          sx={{
            display: "block",
            fontWeight: 750,
            color: "inherit",
            textDecoration: "none",
            mb: { xs: 1, md: 2 },
          }}
        >
          Hello, my name is Danny Rusk
        </Typography>
        <Typography variant="h5" sx={{ fontSize: "large", textAlign: "left" }}>
          I am an aspiring frontend developer and current data analyst. I love
          building bold and beautiful experiences for the user.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, mx: "auto" }}
          onClick={scrollToProjects}
        >
          Check out my work
        </Button>
      </Paper>
    </Box>
  );
});
