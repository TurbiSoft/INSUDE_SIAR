namespace MiMovieTutorial.INSUDE {
    export interface MateriasRow {
        IdMateria?: number;
        IdEscuela?: number;
        Codigo?: string;
        Nombre?: string;
        Estado?: string;
        CreateUser?: string;
        CreateDate?: string;
        LastUpdatedAt?: string;
        IdEscuelaIdInstitucion?: number;
        IdEscuelaNombre?: string;
        IdEscuelaSiglas?: string;
        IdEscuelaDireccion?: string;
        IdEscuelaTelefono?: string;
        IdEscuelaContacto?: string;
        IdEscuelaEstado?: string;
        IdEscuelaCreateUser?: string;
        IdEscuelaCreateDate?: string;
    }

    export namespace MateriasRow {
        export const idProperty = 'IdMateria';
        export const nameProperty = 'Codigo';
        export const localTextPrefix = 'INSUDE.Materias';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdMateria = "IdMateria",
            IdEscuela = "IdEscuela",
            Codigo = "Codigo",
            Nombre = "Nombre",
            Estado = "Estado",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            LastUpdatedAt = "LastUpdatedAt",
            IdEscuelaIdInstitucion = "IdEscuelaIdInstitucion",
            IdEscuelaNombre = "IdEscuelaNombre",
            IdEscuelaSiglas = "IdEscuelaSiglas",
            IdEscuelaDireccion = "IdEscuelaDireccion",
            IdEscuelaTelefono = "IdEscuelaTelefono",
            IdEscuelaContacto = "IdEscuelaContacto",
            IdEscuelaEstado = "IdEscuelaEstado",
            IdEscuelaCreateUser = "IdEscuelaCreateUser",
            IdEscuelaCreateDate = "IdEscuelaCreateDate"
        }
    }
}
