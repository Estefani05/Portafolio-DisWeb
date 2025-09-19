import { useState, useEffect } from "react";
import Head from "../seo/Head";
import { useNavigate } from "react-router-dom";
import Trabajos from "./Trabajos";

interface Course {
  codigo: string;
  nombre: string;
  semestre: string;
  descripcion: string;
  trabajos: trabajo[];
}

interface trabajo {
    Nombre: string;
    Tipo: string;
    Descripcion: string;
    Fecha: string;
    Tecnologia: string;
    repositorio: string;
    desplegado: string;
}




export default function Cursos(){

    const [courses, setCourses] = useState<Course[]>([]);
    const navigate = useNavigate();
    // Example of programmatic navigation with state


      useEffect(() => {
        fetch("/data/courses.json")
          .then((res) => res.json())
          .then((json) => setCourses(json));
      }, []);

    
      const goToCourse = (title: string,trabajos: trabajo[]) => {
        navigate(`/Trabajos/${title}`,{
          state: trabajos
        });
      };
    




  return (
    <>
      <Head title="Trabajos | Portafolio" />
      <main className="max-w-5xl mx-auto px-4 py-8">

       {courses.map((course: Course) => (<>
       <br/>
      <section className="mb-5">
          <h1  key={`title-${course.codigo}`} className="text-3xl font-bold text-brown-800 mb-4">{course.nombre}</h1>
          <div key={`section-${course.codigo}`} className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]">
            <p className="text-gray-700 leading-relaxed">
               <strong>Codigo</strong> : {course.codigo} <br/>
               <strong>Semestre</strong> : {course.semestre} <br/>
               <strong>Descripción</strong> : {course.descripcion}
            </p>
            <button
              onClick={() => goToCourse(`${course.codigo}-${course.nombre}`,course.trabajos)}
              className="mt-4 bg-[#4d230f] text-white px-5 py-2 rounded shadow hover:bg-[#34281d] transition">
              Ver Trabajos
              </button>
          </div>
        </section>
        </>

           ))}
      </main>
    </>
  );
}
