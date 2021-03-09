namespace MiMovieTutorial.INSUDE {
    export namespace NivelesPorCarreraService {
        export const baseUrl = 'INSUDE/NivelesPorCarrera';

        export declare function Create(request: Serenity.SaveRequest<NivelesPorCarreraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<NivelesPorCarreraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NivelesPorCarreraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NivelesPorCarreraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "INSUDE/NivelesPorCarrera/Create",
            Update = "INSUDE/NivelesPorCarrera/Update",
            Delete = "INSUDE/NivelesPorCarrera/Delete",
            Retrieve = "INSUDE/NivelesPorCarrera/Retrieve",
            List = "INSUDE/NivelesPorCarrera/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>NivelesPorCarreraService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
