namespace MiMovieTutorial.INSUDE {
    export interface ServiciosEstudiantilesRow {
        Id?: number;
        Descripcion?: string;
        CreateDate?: string;
        LastUpdatedAt?: string;
        CreateUser?: string;
    }

    export namespace ServiciosEstudiantilesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'INSUDE.ServiciosEstudiantiles';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Descripcion = "Descripcion",
            CreateDate = "CreateDate",
            LastUpdatedAt = "LastUpdatedAt",
            CreateUser = "CreateUser"
        }
    }
}
