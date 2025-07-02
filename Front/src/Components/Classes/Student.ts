import type Subject from "./Subject";

export default class Student {
    private materias: Subject[];
    private matricula: string;
    private ac: string;
    private curso: string;
    private semIng: string;
    private notaDoEnem: number;

    constructor(materias: Subject[] = [], matricula: string, ac:string, curso: string, semIng: string, notaDoEnem: number) {
        this.materias = materias;
        this.matricula = matricula;
        this.ac = ac;
        this.curso = curso;
        this.semIng = semIng;
        this.notaDoEnem = notaDoEnem;
    }

    public cadastrarMateria(newMateria: Subject) {
        this.materias.push(newMateria);
    }

    public trancarMateria(materiaTrancada: Subject) {
        this.materias = this.materias.filter((materia) => {
            return materia != materiaTrancada;
        });
    }

    public getMaterias(): Subject[] {
        return this.materias;
    } 

}