import { useState } from "react";
import SubjectForm from "../SubjectForm/SubjectForm";
import styles from './Dashboard.module.css';
import { useStudent } from "../../Context/studentContext";
import type Subject from "../Classes/Subject.ts";


export default function Dashboard () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {student} = useStudent();

  const handleFormSuccess = () => {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.dashboard_container}>
      <header className={styles.headerContainer}>
        <h1 className={styles.title}>Meu Dashboard</h1>
        <button onClick={() => setIsModalOpen(true)} className={styles.addButton}>
          + Adicionar Materia
        </button>
      </header>

      {isModalOpen && (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content}>
            <button onClick={() => setIsModalOpen(false)} className={styles.close_btn}>
              &times;
            </button>
            <SubjectForm onSuccess={handleFormSuccess}/>
          </div>
        </div>
      )}

      {student && student.getMaterias().map((subject: Subject) => (
        <div key={subject.getId()}>
          <p>{subject.getCodigo()}</p>
          <p>{subject.getNome()}</p>
          <p>{subject.getDias()}</p>
          <p>{subject.getHorario()}</p>
          <p>{subject.getNota()}</p>
          <p>{subject.getTasks()}</p>
        </div>
      ))}
    </div>
  );
}
