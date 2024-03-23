import { Grid, Typography, Paper, Button, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { forwardRef } from "react";
import { theme } from "../themes/theme";

export default forwardRef(function About({}, ref) {
  const technologies = [
    "JAVASCRIPT",
    "PYTHON",
    "REACT",
    "VUE",
    "TENSORFLOW",
    "D3",
    "SQL",
    "PHP",
  ];

  const colors = [
    theme.palette.primary.dark,
    theme.palette.secondary.dark,
    theme.palette.error.dark,
    theme.palette.warning.dark,
    theme.palette.info.dark,
  ];

  const icons = ["javascript-plain", ""];
  return (
    <>
      <Paper
        ref={ref}
        elevation={5}
        sx={{
          flexDirection: "column",
          m: { xs: 3, md: 30 },
          p: 3,
          textAlign: "left",
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          align="left"
          sx={{
            display: "block",
            fontWeight: 750,
            color: "inherit",
            textDecoration: "none",
            mb: { xs: 2, md: 3 },
          }}
        >
          A little about me...
        </Typography>
        <Typography sx={{ fontSize: "large" }}>
          I majored in Information Science at Cornell University. Currently, I
          am a data analyst for Northwell Health, where I leverage python to
          automate business tasks. I am looking for positions in front end
          development and data science. When I am not programming, I enjoy
          playing the guitar and going to the beach with my dogs!
        </Typography>

        <Typography variant="h4" sx={{ my: { xs: 2, md: 3 }, fontWeight: 750 }}>
          My Technologies
        </Typography>

        <Grid container spacing={0}>
          {technologies.map((tech, index) => (
            <Grid item key={index} xs={6} md={3}>
              <Paper
                sx={{
                  textAlign: "center",
                  justifyItems: "center",
                  justifyContent: "center",
                  bgcolor: colors[index % colors.length],
                  p: 4,
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    bgcolor: "darken(5%)",
                  },
                }}
              >
                <Typography variant="h6">{tech}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
});
