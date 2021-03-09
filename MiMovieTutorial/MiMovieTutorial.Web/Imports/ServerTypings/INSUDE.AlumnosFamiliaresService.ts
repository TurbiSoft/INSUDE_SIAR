namespace MiMovieTutorial.INSUDE {
    export namespace AlumnosFamiliaresService {
        export const baseUrl = 'INSUDE/AlumnosFamiliares';

        export declare function Create(request: Serenity.SaveRequest<AlumnosFamiliaresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AlumnosFamiliaresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AlumnosFamiliaresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AlumnosFamiliaresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "INSUDE/AlumnosFamiliares/Create",
            Update = "INSUDE/AlumnosFamiliares/Update",
            Delete = "INSUDE/AlumnosFamiliares/Delete",
            Retrieve = "INSUDE/AlumnosFamiliares/Retrieve",
            List = "INSUDE/AlumnosFamiliares/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AlumnosFamiliaresService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
