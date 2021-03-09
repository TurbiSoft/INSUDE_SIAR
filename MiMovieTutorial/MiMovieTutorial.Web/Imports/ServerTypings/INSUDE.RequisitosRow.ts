namespace MiMovieTutorial.INSUDE {
    export interface RequisitosRow {
        IdRequisito?: number;
        Nombre?: string;
        CreateUser?: string;
        CreateDate?: string;
    }

    export namespace RequisitosRow {
        export const idProperty = 'IdRequisito';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'INSUDE.Requisitos';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdRequisito = "IdRequisito",
            Nombre = "Nombre",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate"
        }
    }
}
