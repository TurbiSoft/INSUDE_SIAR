namespace MiMovieTutorial.INSUDE {
    export namespace AlumnosCarrerasService {
        export const baseUrl = 'INSUDE/AlumnosCarreras';

        export declare function Create(request: Serenity.SaveRequest<AlumnosCarrerasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AlumnosCarrerasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AlumnosCarrerasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AlumnosCarrerasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "INSUDE/AlumnosCarreras/Create",
            Update = "INSUDE/AlumnosCarreras/Update",
            Delete = "INSUDE/AlumnosCarreras/Delete",
            Retrieve = "INSUDE/AlumnosCarreras/Retrieve",
            List = "INSUDE/AlumnosCarreras/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AlumnosCarrerasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
