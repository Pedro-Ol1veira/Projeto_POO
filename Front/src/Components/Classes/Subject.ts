export default class Subject {
    private id: string;
    private codigo: string;
    private nome: string;
    private dias: string[];
    private horario: string;
    private nota: number;
    private tasks: []; 

    constructor(codigo: string, nome: string, dias: string[], horario: string, nota: number = 0, tasks: [] = []) {
        this.id = crypto.randomUUID();
        this.codigo = codigo;
        this.nome = nome;
        this.dias = dias;
        this.horario = horario;
        this.nota = nota;
        this.tasks = tasks;
    }

    public getCodigo(): string {
        return this.codigo;
    }
    public getNome(): string {
        return this.nome;
    }
    public getDias(): string[] {
        return this.dias;
    }
    public getHorario(): string {
        return this.horario;
    }
    public getNota(): number {
        return this.nota;
    }
    public getTasks(): [] {
        return this.tasks;
    }
    public getId(): string {
        return this.id;
    }
}