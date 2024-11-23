import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The switcher",
    description:
      "Este proyecto consiste en una aplicación web que ayuda a gestionar tareas de manera eficiente, con integración a servicios en la nube.",
    image: "public/Switcher.png",
    link: "https://github.com/tu-usuario/proyecto-1",
  },
  {
    title: "Proyecto 2",
    description:
      "Este proyecto es un videojuego desarrollado en Unity que explora conceptos de física realista y narrativas interactivas.",
    image: "https://via.placeholder.com/600x300",
    link: "https://github.com/tu-usuario/proyecto-2",
  },
  {
    title: "Proyecto 3",
    description:
      "Se trata de una plataforma e-commerce que incluye búsqueda avanzada, recomendaciones personalizadas y un sistema de pago seguro.",
    image: "https://via.placeholder.com/600x300",
    link: "https://github.com/tu-usuario/proyecto-3",
  },
  // Agrega más proyectos según sea necesario
];

const MainComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <main
      className="p-8"
      style={{
        backgroundColor: "#0F0A18",
        color: "#00A693",
        minHeight: "100vh",
      }}
    >
      {/* Título Principal */}
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: "4rem",
          background: "linear-gradient(to right, #005B41, #008170, #00A693)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 4,
        }}
      >
        Mis Proyectos Destacados
      </Typography>

      {/* Tarjetas de Proyectos */}
      <div
        className="grid gap-6 max-w-8xl mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
          >
            <Card
              onClick={() => handleCardClick(`/projects/${index}`)}
              sx={{
                maxWidth: "100%",
                margin: "auto",
                backgroundColor: "#0C282E",
                color: "#FFFFFF",
                cursor: "pointer",
                maxHeight: "800px", // Altura máxima de la tarjeta
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  maxHeight: "460px", // Altura máxima de la imagen
                  objectFit: "cover", // Recorta la imagen si excede el tamaño
                }}
                image={project.image}
                alt={project.title}
              />
              <CardContent
                sx={{
                  flexGrow: 1, // Permite que el contenido crezca sin exceder la altura máxima
                  overflow: "hidden", // Oculta cualquier contenido adicional si se desborda
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#00A693" }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#A6A6A6", fontSize: "0.875rem" }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mt: "auto",
                  display: "flex",
                  justifyContent: "center",
                  padding: "8px",
                }}
              >
                <Button
                  size="small"
                  sx={{
                    color: "#00A693",
                    borderColor: "#00A693",
                    "&:hover": {
                      backgroundColor: "#005B41",
                      color: "#FFFFFF",
                    },
                  }}
                  variant="outlined"
                >
                  Más información
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
