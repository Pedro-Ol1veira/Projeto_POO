import { useEffect, useState } from "react";
import style from "./RegisterStudent.module.css";
import Student from "../../Classes/Student";
import { useStudent } from "../../Context/studentContext";

export default function RegisterStudent() {
  const {student, setStudent} = useStudent(); 

  const [registration, setRegitration] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [ac, setAc] = useState<string>("");
  const [enem, setEnem] = useState<number>(0);
  const [yearEntry, setYearEntry] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newStudent: Student = new Student([], registration, ac, course, yearEntry, enem);
    setStudent(newStudent);
  }

  useEffect(() => {
    console.log(student);
  }, [student])
  
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formGroup}>
        <label htmlFor="registration">Matrícula:</label>
        <input type="text" id="registration" onChange={(e) => setRegitration(e.target.value)} />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="course">Curso:</label>
        <input type="text" id="course" onChange={(e) => setCourse(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="ac">Aréa de concetração:</label>
        <input type="text" id="ac" onChange={(e) => setAc(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="enem">Nota do Enem:</label>
        <input type="number" id="enem" onChange={(e) => setEnem(parseInt(e.target.value))}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="yearEntry">Semestre de ingresso:</label>
        <input type="text" id="yearEntry" onChange={(e) => setYearEntry(e.target.value)}/>
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
}
