namespace MiMovieTutorial.INSUDE {
    export interface InstructoresRow {
        IdInstructor?: number;
        Codigo?: string;
        Nombres?: string;
        Telefono?: string;
        NivelAcademico?: string;
        IdUsuario?: number;
        Estado?: string;
        CreateUser?: string;
        CreateDate?: string;
        Identificacion?: string;
        TipoIdentificacion?: string;
        LastUpdatedAt?: string;
        FechaIngreso?: string;
        CorreoElectronico?: string;
        Sexo?: string;
    }

    export namespace InstructoresRow {
        export const idProperty = 'IdInstructor';
        export const nameProperty = 'Codigo';
        export const localTextPrefix = 'INSUDE.Instructores';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdInstructor = "IdInstructor",
            Codigo = "Codigo",
            Nombres = "Nombres",
            Telefono = "Telefono",
            NivelAcademico = "NivelAcademico",
            IdUsuario = "IdUsuario",
            Estado = "Estado",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            Identificacion = "Identificacion",
            TipoIdentificacion = "TipoIdentificacion",
            LastUpdatedAt = "LastUpdatedAt",
            FechaIngreso = "FechaIngreso",
            CorreoElectronico = "CorreoElectronico",
            Sexo = "Sexo"
        }
    }
}
