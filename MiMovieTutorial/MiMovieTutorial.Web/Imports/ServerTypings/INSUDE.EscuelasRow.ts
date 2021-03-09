namespace MiMovieTutorial.INSUDE {
    export interface EscuelasRow {
        IdEscuela?: number;
        IdInstitucion?: number;
        Nombre?: string;
        Siglas?: string;
        Direccion?: string;
        Telefono?: string;
        Contacto?: string;
        Estado?: string;
        CreateUser?: string;
        CreateDate?: string;
        IdInstitucionIdCompania?: number;
        IdInstitucionNombre?: string;
        IdInstitucionCreateUser?: string;
        IdInstitucionCreateDate?: string;
    }

    export namespace EscuelasRow {
        export const idProperty = 'IdEscuela';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'INSUDE.Escuelas';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdEscuela = "IdEscuela",
            IdInstitucion = "IdInstitucion",
            Nombre = "Nombre",
            Siglas = "Siglas",
            Direccion = "Direccion",
            Telefono = "Telefono",
            Contacto = "Contacto",
            Estado = "Estado",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            IdInstitucionIdCompania = "IdInstitucionIdCompania",
            IdInstitucionNombre = "IdInstitucionNombre",
            IdInstitucionCreateUser = "IdInstitucionCreateUser",
            IdInstitucionCreateDate = "IdInstitucionCreateDate"
        }
    }
}
