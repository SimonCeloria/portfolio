import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-[#232D3F] text-end py-2 px-2 w-full">
      <p className="text-white">
        Creado por{" "}
        <a
          href="https://github.com/SimonCeloria"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A693] hover:underline"
        >
          Simón Celoria
        </a>
      </p>
    </footer>
  );
};

export default FooterComponent;
