import React from "react";

const HeaderComponent = () => {
  return (
    <header
      className="bg-[#0F0A18] text-[var(--VerdeClarisimo)] py-4 px-6 flex items-center justify-between w-full mx-auto shadow-md"
    >
      {/* Nombre */}
      <h1 className="text-xl md:text-2xl font-bold tracking-wide">
        Simón Celoria
      </h1>

      {/* Navegación */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-[var(--VerdeClaro)] hover:text-[var(--VerdeClarisimo)] transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--VerdeClaro)] hover:text-[var(--VerdeClarisimo)] transition-colors"
            >
              Curriculum
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[var(--VerdeClaro)] hover:text-[var(--VerdeClarisimo)] transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
