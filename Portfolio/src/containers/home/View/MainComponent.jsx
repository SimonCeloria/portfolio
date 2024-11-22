import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción breve del proyecto 1.",
    image: "https://via.placeholder.com/345x140",
    link: "https://github.com/tu-usuario/proyecto-1",
  },
  {
    title: "Proyecto 2",
    description: "Descripción breve del proyecto 2.",
    image: "https://via.placeholder.com/345x140",
    link: "https://github.com/tu-usuario/proyecto-2",
  },
  {
    title: "Proyecto 3",
    description: "Descripción breve del proyecto 3.",
    image: "https://via.placeholder.com/345x140",
    link: "https://github.com/tu-usuario/proyecto-3",
  },
];

const MainComponent = () => {
  return (
    <main className="mt-24 p-8">
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: "6rem",
          background: "linear-gradient(to right, #005B41, #008170, #00A693)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}
      >
        SIMÓN CELORIA
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color="text.secondary"
        sx={{ mb: 8 }}
      >
        Mis Proyectos Destacados
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: "auto" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en GitHub
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
