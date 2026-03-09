import CursoCarousel from "../../components/docente/CursoCarousel";
import ListaMateriales from "../../components/docente/ListaMateriales";
import { useState } from "react";
import "../../styles/docente/formularPreguntas.css";

export default function FormularPreguntas() {
  // const [preguntas, setPreguntas] = useState([{ id: 1 }]);
  const [idCurso, setIdCurso] = useState("");

  // const agregarPregunta = () => {
  //   setPreguntas([...preguntas, { id: preguntas.length + 1 }]);
  // };

  return (
    <div className="formular-preguntas-page">
      <h1 className="title">Formular preguntas</h1>


      <div className="top-section">
        <CursoCarousel setIdCurso={setIdCurso} />
        <ListaMateriales idCurso={idCurso} />
      </div>



    </div>
  );
}
