namespace MiMovieTutorial.INSUDE {
    export interface PrivilegiosRow {
        IdRol?: number;
        Rol?: string;
        TipoUsuario?: string;
        Descripcion?: string;
        CreateUser?: string;
        CreateDate?: string;
        LastUpdatedAt?: string;
    }

    export namespace PrivilegiosRow {
        export const idProperty = 'IdRol';
        export const nameProperty = 'Rol';
        export const localTextPrefix = 'INSUDE.Privilegios';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdRol = "IdRol",
            Rol = "Rol",
            TipoUsuario = "TipoUsuario",
            Descripcion = "Descripcion",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            LastUpdatedAt = "LastUpdatedAt"
        }
    }
}
