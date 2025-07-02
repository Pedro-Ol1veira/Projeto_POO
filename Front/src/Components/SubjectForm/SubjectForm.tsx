import { useState } from 'react';
import styles from './SubjectForm.module.css';
import { useStudent } from '../../Context/studentContext';
import Subject from '../Classes/Subject';

interface IProps {
  onSuccess: () => void;
}

export default function SubjectForm ({ onSuccess }: IProps) {
  const { student } = useStudent();
  const DIAS_DA_SEMANA = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  const [code, setCode] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [dates, setDates] = useState<string[]>([]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMateria = new Subject(code, name, dates, time);
    student?.cadastrarMateria(newMateria);
    
    console.log(student);
    onSuccess();
  }

  const handleDiaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
      setDates(prevState => [...prevState, name]);
    }
  };
  
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="code" className={styles.formLabel}>Código</label>
        <input type="text" id="code" name="code" className={styles.formInput} onChange={(e) => setCode(e.target.value)}/>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>Nome</label>
        <input type="text" id="name" name="name" className={styles.formInput} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="time" className={styles.formLabel}>Horário</label>
        <input type="text" id="time" name="time" className={styles.formInput} placeholder="Ex: 14:00 - 16:00" onChange={(e) => setTime(e.target.value)}/>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Dias</label>
        <div className={styles.checkboxGroupContainer}>
          {DIAS_DA_SEMANA.map((dia) => (
            <div key={dia} className={styles.checkboxItem}>
              <input
                type="checkbox"
                id={dia}
                name={dia}
                checked={dates.includes(dia)}
                onChange={handleDiaChange}
                className={styles.checkboxInput}
              />
              <label htmlFor={dia} className={styles.checkboxLabel}>{dia}</label>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Enviar
      </button>
    </form>
  );
}
