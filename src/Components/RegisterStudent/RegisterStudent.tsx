import style from "./RegisterStudent.module.css";

export default function RegisterStudent() {
  return (
    <form className={style.form}>
      <div className={style.formGroup}>
        <label htmlFor="registration">Matrícula:</label>
        <input type="text" id="registration" />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="course">Curso:</label>
        <input type="text" id="course" />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="yearEntry">Ano de ingresso:</label>
        <input type="text" id="yearEntry" />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
}
