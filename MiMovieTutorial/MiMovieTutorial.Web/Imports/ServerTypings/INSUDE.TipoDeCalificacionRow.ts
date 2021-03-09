namespace MiMovieTutorial.INSUDE {
    export interface TipoDeCalificacionRow {
        IdTipoCalificacion?: number;
        Nombre?: string;
        CreateDate?: string;
        CreateUser?: string;
    }

    export namespace TipoDeCalificacionRow {
        export const idProperty = 'IdTipoCalificacion';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'INSUDE.TipoDeCalificacion';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdTipoCalificacion = "IdTipoCalificacion",
            Nombre = "Nombre",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser"
        }
    }
}
