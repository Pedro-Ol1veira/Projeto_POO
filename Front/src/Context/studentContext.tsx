import { createContext, useContext, useState, type ReactNode } from "react";
import Student from "../Components/Classes/Student";

interface IStudentContext {
  student: Student | null;
  setStudent(student: Student | null): void;
}

const StudentContext = createContext<IStudentContext | undefined>(undefined);

interface IContextProps {
  children: ReactNode;
}

export function StudentProvider({ children }: IContextProps) {
    const [student, setStudent] = useState<Student | null>(null);

    return(
        <StudentContext.Provider value={{student, setStudent}}>
            {children}
        </StudentContext.Provider>
    )
}

export function useStudent() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('O contexto deve ser setado');
  }
  return context;
}