export default class Student {
    private materias: Array<String>;
    private matricula: string;
    private ac: string;
    private curso: string;
    private semIng: string;
    private notaDoEnem: number;

    constructor(materias: Array<String> = [], matricula: string, ac:string, curso: string, semIng: string, notaDoEnem: number) {
        this.materias = materias;
        this.matricula = matricula;
        this.ac = ac;
        this.curso = curso;
        this.semIng = semIng;
        this.notaDoEnem = notaDoEnem;
    }

    public cadastrarMateria(newMateria: string) {
        this.materias.push(newMateria);
    }

    public trancarMateria(materiaTrancada: string) {
        this.materias = this.materias.filter((materia) => {
            return materia != materiaTrancada;
        });
    }

}