/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace MiMovieTutorial.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
}
declare namespace MiMovieTutorial.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace MiMovieTutorial.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace MiMovieTutorial.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace MiMovieTutorial.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace MiMovieTutorial.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace MiMovieTutorial.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace MiMovieTutorial.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace MiMovieTutorial.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace MiMovieTutorial.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace MiMovieTutorial.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace MiMovieTutorial.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace MiMovieTutorial.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace MiMovieTutorial.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    namespace BasicSamplesService {
        const baseUrl = "BasicSamples/BasicSamples";
        function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            OrdersByShipper = "BasicSamples/BasicSamples/OrdersByShipper",
            OrderBulkAction = "BasicSamples/BasicSamples/OrderBulkAction"
        }
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface ChangingLookupTextForm {
        ProductID: ChangingLookupTextEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class ChangingLookupTextForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class CustomerGrossSalesColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface CustomerGrossSalesListRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    namespace CustomerGrossSalesService {
        const baseUrl = "BasicSamples/CustomerGrossSales";
        function List(request: CustomerGrossSalesListRequest, onSuccess?: (response: Serenity.ListResponse<Northwind.CustomerGrossSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "BasicSamples/CustomerGrossSales/List"
        }
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class DragDropSampleColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface DragDropSampleForm {
        Title: Serenity.StringEditor;
    }
    class DragDropSampleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface DragDropSampleRow {
        Id?: number;
        ParentId?: number;
        Title?: string;
    }
    namespace DragDropSampleRow {
        const idProperty = "Id";
        const nameProperty = "Title";
        const localTextPrefix = "Northwind.DragDropSample";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            ParentId = "ParentId",
            Title = "Title"
        }
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    namespace DragDropSampleService {
        const baseUrl = "BasicSamples/DragDropSample";
        function Create(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "BasicSamples/DragDropSample/Create",
            Update = "BasicSamples/DragDropSample/Update",
            Delete = "BasicSamples/DragDropSample/Delete",
            Retrieve = "BasicSamples/DragDropSample/Retrieve",
            List = "BasicSamples/DragDropSample/List"
        }
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface FilteredLookupInDetailForm {
        CustomerID: Northwind.CustomerEditor;
        OrderDate: Serenity.DateEditor;
        CategoryID: Serenity.LookupEditor;
        DetailList: FilteredLookupDetailEditor;
    }
    class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface HardcodedValuesForm {
        SomeValue: HardcodedValuesEditor;
    }
    class HardcodedValuesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class InlineImageInGridColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface LookupFilterByMultipleForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface OrdersByShipperRequest extends Serenity.ServiceRequest {
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface PopulateLinkedDataForm {
        CustomerID: Northwind.CustomerEditor;
        CustomerContactName: Serenity.StringEditor;
        CustomerContactTitle: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerRegion: Serenity.StringEditor;
        CustomerCountry: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerFax: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: Northwind.OrderDetailsEditor;
    }
    class PopulateLinkedDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    namespace ProductExcelImportService {
        const baseUrl = "BasicSamples/ProductExcelImport";
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ExcelImport = "BasicSamples/ProductExcelImport/ExcelImport"
        }
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    interface StaticTextBlockForm {
        StaticText: StaticTextBlock;
        SomeInput: Serenity.StringEditor;
        HtmlList: StaticTextBlock;
        FromLocalText: StaticTextBlock;
        DisplayFieldValue: StaticTextBlock;
    }
    class StaticTextBlockForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace MiMovieTutorial.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace MiMovieTutorial.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace MiMovieTutorial.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace MiMovieTutorial.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace MiMovieTutorial {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace MiMovieTutorial {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace MiMovieTutorial {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace MiMovieTutorial {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class AlumnosCarrerasColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface AlumnosCarrerasForm {
        IdAlumno: Serenity.IntegerEditor;
        IdTitulo: Serenity.IntegerEditor;
        IdPensum: Serenity.IntegerEditor;
        IdTituloNivel: Serenity.IntegerEditor;
        NoRegistro: Serenity.StringEditor;
        Fecha: Serenity.DateEditor;
        Becado: Serenity.StringEditor;
        FechaGraduacion: Serenity.DateEditor;
        IdPromocion: Serenity.IntegerEditor;
        Promocion: Serenity.StringEditor;
        Libro: Serenity.IntegerEditor;
        Folio: Serenity.IntegerEditor;
        Numero: Serenity.IntegerEditor;
        Estado: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
    }
    class AlumnosCarrerasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface AlumnosCarrerasRow {
        IdAlumnoCarrera?: number;
        IdAlumno?: number;
        IdTitulo?: number;
        IdPensum?: number;
        IdTituloNivel?: number;
        NoRegistro?: string;
        Fecha?: string;
        Becado?: string;
        FechaGraduacion?: string;
        IdPromocion?: number;
        Promocion?: string;
        Libro?: number;
        Folio?: number;
        Numero?: number;
        Estado?: string;
        CreateDate?: string;
        LastUpdatedAt?: string;
        IdAlumnoNombres?: string;
        IdAlumnoApellidos?: string;
        IdAlumnoSexo?: string;
        IdAlumnoMatricula?: string;
        IdAlumnoFechaNacimiento?: string;
        IdAlumnoLugarNacimiento?: string;
        IdAlumnoFechaRegistro?: string;
        IdAlumnoFechaIngreso?: string;
        IdAlumnoTipoIdentificacion?: string;
        IdAlumnoIdentificacion?: string;
        IdAlumnoEstadoCivil?: number;
        IdAlumnoCorreoElectronico?: string;
        IdAlumnoTelHogar?: string;
        IdAlumnoTelCelular?: string;
        IdAlumnoObservaciones?: string;
        IdAlumnoTipo?: string;
        IdAlumnoDireccion?: string;
        IdAlumnoCiudad?: string;
        IdAlumnoIdPais?: number;
        IdAlumnoIdNacionalidad?: number;
        IdAlumnoIdUsuario?: number;
        IdAlumnoDireccionOficina?: string;
        IdAlumnoFuncion?: string;
        IdAlumnoIdInstitucion?: number;
        IdAlumnoIdRango?: number;
        IdAlumnoIdDependencia?: number;
        IdAlumnoTelOficina?: string;
        IdAlumnoDpMatricula?: string;
        IdAlumnoEcMatricula?: string;
        IdAlumnoEstado?: string;
        IdAlumnoCreateDate?: string;
        IdAlumnoCreateUser?: string;
        IdAlumnoLastUpdatedAt?: string;
        IdTituloCodigo?: string;
        IdTituloNombre?: string;
        IdTituloMencion?: string;
        IdTituloIdEscuela?: number;
        IdTituloIdPensum?: number;
        IdTituloMontoInscripcion?: number;
        IdTituloCosto?: number;
        IdTituloCostoCredito?: boolean;
        IdTituloTituloOtorgado?: string;
        IdTituloIdRequisitoNacional?: number;
        IdTituloIdRequisitoExtrangero?: number;
        IdTituloTipoMatricula?: string;
        IdTituloEstado?: string;
        IdTituloCreateDate?: string;
        IdTituloCreateUser?: string;
        IdTituloCicloAcademico?: string;
        IdPensumIdTitulo?: number;
        IdPensumCodigo?: string;
        IdPensumNombre?: string;
        IdPensumEstado?: string;
        IdPensumCreateDate?: string;
        IdPensumCreateUser?: string;
        IdPensumLastUpdatedAt?: string;
        IdPromocionIdTitulo?: number;
        IdPromocionDescripcion?: string;
        IdPromocionYearInicio?: number;
        IdPromocionYearFin?: number;
        IdPromocionEstado?: string;
        IdPromocionCreateDate?: string;
        IdPromocionLastUpdatedAt?: string;
    }
    namespace AlumnosCarrerasRow {
        const idProperty = "IdAlumnoCarrera";
        const nameProperty = "NoRegistro";
        const localTextPrefix = "INSUDE.AlumnosCarreras";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdAlumnoCarrera = "IdAlumnoCarrera",
            IdAlumno = "IdAlumno",
            IdTitulo = "IdTitulo",
            IdPensum = "IdPensum",
            IdTituloNivel = "IdTituloNivel",
            NoRegistro = "NoRegistro",
            Fecha = "Fecha",
            Becado = "Becado",
            FechaGraduacion = "FechaGraduacion",
            IdPromocion = "IdPromocion",
            Promocion = "Promocion",
            Libro = "Libro",
            Folio = "Folio",
            Numero = "Numero",
            Estado = "Estado",
            CreateDate = "CreateDate",
            LastUpdatedAt = "LastUpdatedAt",
            IdAlumnoNombres = "IdAlumnoNombres",
            IdAlumnoApellidos = "IdAlumnoApellidos",
            IdAlumnoSexo = "IdAlumnoSexo",
            IdAlumnoMatricula = "IdAlumnoMatricula",
            IdAlumnoFechaNacimiento = "IdAlumnoFechaNacimiento",
            IdAlumnoLugarNacimiento = "IdAlumnoLugarNacimiento",
            IdAlumnoFechaRegistro = "IdAlumnoFechaRegistro",
            IdAlumnoFechaIngreso = "IdAlumnoFechaIngreso",
            IdAlumnoTipoIdentificacion = "IdAlumnoTipoIdentificacion",
            IdAlumnoIdentificacion = "IdAlumnoIdentificacion",
            IdAlumnoEstadoCivil = "IdAlumnoEstadoCivil",
            IdAlumnoCorreoElectronico = "IdAlumnoCorreoElectronico",
            IdAlumnoTelHogar = "IdAlumnoTelHogar",
            IdAlumnoTelCelular = "IdAlumnoTelCelular",
            IdAlumnoObservaciones = "IdAlumnoObservaciones",
            IdAlumnoTipo = "IdAlumnoTipo",
            IdAlumnoDireccion = "IdAlumnoDireccion",
            IdAlumnoCiudad = "IdAlumnoCiudad",
            IdAlumnoIdPais = "IdAlumnoIdPais",
            IdAlumnoIdNacionalidad = "IdAlumnoIdNacionalidad",
            IdAlumnoIdUsuario = "IdAlumnoIdUsuario",
            IdAlumnoDireccionOficina = "IdAlumnoDireccionOficina",
            IdAlumnoFuncion = "IdAlumnoFuncion",
            IdAlumnoIdInstitucion = "IdAlumnoIdInstitucion",
            IdAlumnoIdRango = "IdAlumnoIdRango",
            IdAlumnoIdDependencia = "IdAlumnoIdDependencia",
            IdAlumnoTelOficina = "IdAlumnoTelOficina",
            IdAlumnoDpMatricula = "IdAlumnoDpMatricula",
            IdAlumnoEcMatricula = "IdAlumnoEcMatricula",
            IdAlumnoEstado = "IdAlumnoEstado",
            IdAlumnoCreateDate = "IdAlumnoCreateDate",
            IdAlumnoCreateUser = "IdAlumnoCreateUser",
            IdAlumnoLastUpdatedAt = "IdAlumnoLastUpdatedAt",
            IdTituloCodigo = "IdTituloCodigo",
            IdTituloNombre = "IdTituloNombre",
            IdTituloMencion = "IdTituloMencion",
            IdTituloIdEscuela = "IdTituloIdEscuela",
            IdTituloIdPensum = "IdTituloIdPensum",
            IdTituloMontoInscripcion = "IdTituloMontoInscripcion",
            IdTituloCosto = "IdTituloCosto",
            IdTituloCostoCredito = "IdTituloCostoCredito",
            IdTituloTituloOtorgado = "IdTituloTituloOtorgado",
            IdTituloIdRequisitoNacional = "IdTituloIdRequisitoNacional",
            IdTituloIdRequisitoExtrangero = "IdTituloIdRequisitoExtrangero",
            IdTituloTipoMatricula = "IdTituloTipoMatricula",
            IdTituloEstado = "IdTituloEstado",
            IdTituloCreateDate = "IdTituloCreateDate",
            IdTituloCreateUser = "IdTituloCreateUser",
            IdTituloCicloAcademico = "IdTituloCicloAcademico",
            IdPensumIdTitulo = "IdPensumIdTitulo",
            IdPensumCodigo = "IdPensumCodigo",
            IdPensumNombre = "IdPensumNombre",
            IdPensumEstado = "IdPensumEstado",
            IdPensumCreateDate = "IdPensumCreateDate",
            IdPensumCreateUser = "IdPensumCreateUser",
            IdPensumLastUpdatedAt = "IdPensumLastUpdatedAt",
            IdPromocionIdTitulo = "IdPromocionIdTitulo",
            IdPromocionDescripcion = "IdPromocionDescripcion",
            IdPromocionYearInicio = "IdPromocionYearInicio",
            IdPromocionYearFin = "IdPromocionYearFin",
            IdPromocionEstado = "IdPromocionEstado",
            IdPromocionCreateDate = "IdPromocionCreateDate",
            IdPromocionLastUpdatedAt = "IdPromocionLastUpdatedAt"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace AlumnosCarrerasService {
        const baseUrl = "INSUDE/AlumnosCarreras";
        function Create(request: Serenity.SaveRequest<AlumnosCarrerasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AlumnosCarrerasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AlumnosCarrerasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AlumnosCarrerasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/AlumnosCarreras/Create",
            Update = "INSUDE/AlumnosCarreras/Update",
            Delete = "INSUDE/AlumnosCarreras/Delete",
            Retrieve = "INSUDE/AlumnosCarreras/Retrieve",
            List = "INSUDE/AlumnosCarreras/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class AlumnosColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class AlumnosFamiliaresColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface AlumnosFamiliaresForm {
        IdAlumno: Serenity.IntegerEditor;
        Parentesco: Serenity.StringEditor;
        Nombres: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
    }
    class AlumnosFamiliaresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface AlumnosFamiliaresRow {
        IdAlumnoFamiliar?: number;
        IdAlumno?: number;
        Parentesco?: string;
        Nombres?: string;
        Telefono?: string;
        CreateUser?: string;
        CreateDate?: string;
        IdAlumnoNombres?: string;
        IdAlumnoApellidos?: string;
        IdAlumnoSexo?: string;
        IdAlumnoMatricula?: string;
        IdAlumnoFechaNacimiento?: string;
        IdAlumnoLugarNacimiento?: string;
        IdAlumnoFechaRegistro?: string;
        IdAlumnoFechaIngreso?: string;
        IdAlumnoTipoIdentificacion?: string;
        IdAlumnoIdentificacion?: string;
        IdAlumnoEstadoCivil?: number;
        IdAlumnoCorreoElectronico?: string;
        IdAlumnoTelHogar?: string;
        IdAlumnoTelCelular?: string;
        IdAlumnoObservaciones?: string;
        IdAlumnoTipo?: string;
        IdAlumnoDireccion?: string;
        IdAlumnoCiudad?: string;
        IdAlumnoIdPais?: number;
        IdAlumnoIdNacionalidad?: number;
        IdAlumnoIdUsuario?: number;
        IdAlumnoDireccionOficina?: string;
        IdAlumnoFuncion?: string;
        IdAlumnoIdInstitucion?: number;
        IdAlumnoIdRango?: number;
        IdAlumnoIdDependencia?: number;
        IdAlumnoTelOficina?: string;
        IdAlumnoDpMatricula?: string;
        IdAlumnoEcMatricula?: string;
        IdAlumnoEstado?: string;
        IdAlumnoCreateDate?: string;
        IdAlumnoCreateUser?: string;
        IdAlumnoLastUpdatedAt?: string;
    }
    namespace AlumnosFamiliaresRow {
        const idProperty = "IdAlumnoFamiliar";
        const nameProperty = "Parentesco";
        const localTextPrefix = "INSUDE.AlumnosFamiliares";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdAlumnoFamiliar = "IdAlumnoFamiliar",
            IdAlumno = "IdAlumno",
            Parentesco = "Parentesco",
            Nombres = "Nombres",
            Telefono = "Telefono",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            IdAlumnoNombres = "IdAlumnoNombres",
            IdAlumnoApellidos = "IdAlumnoApellidos",
            IdAlumnoSexo = "IdAlumnoSexo",
            IdAlumnoMatricula = "IdAlumnoMatricula",
            IdAlumnoFechaNacimiento = "IdAlumnoFechaNacimiento",
            IdAlumnoLugarNacimiento = "IdAlumnoLugarNacimiento",
            IdAlumnoFechaRegistro = "IdAlumnoFechaRegistro",
            IdAlumnoFechaIngreso = "IdAlumnoFechaIngreso",
            IdAlumnoTipoIdentificacion = "IdAlumnoTipoIdentificacion",
            IdAlumnoIdentificacion = "IdAlumnoIdentificacion",
            IdAlumnoEstadoCivil = "IdAlumnoEstadoCivil",
            IdAlumnoCorreoElectronico = "IdAlumnoCorreoElectronico",
            IdAlumnoTelHogar = "IdAlumnoTelHogar",
            IdAlumnoTelCelular = "IdAlumnoTelCelular",
            IdAlumnoObservaciones = "IdAlumnoObservaciones",
            IdAlumnoTipo = "IdAlumnoTipo",
            IdAlumnoDireccion = "IdAlumnoDireccion",
            IdAlumnoCiudad = "IdAlumnoCiudad",
            IdAlumnoIdPais = "IdAlumnoIdPais",
            IdAlumnoIdNacionalidad = "IdAlumnoIdNacionalidad",
            IdAlumnoIdUsuario = "IdAlumnoIdUsuario",
            IdAlumnoDireccionOficina = "IdAlumnoDireccionOficina",
            IdAlumnoFuncion = "IdAlumnoFuncion",
            IdAlumnoIdInstitucion = "IdAlumnoIdInstitucion",
            IdAlumnoIdRango = "IdAlumnoIdRango",
            IdAlumnoIdDependencia = "IdAlumnoIdDependencia",
            IdAlumnoTelOficina = "IdAlumnoTelOficina",
            IdAlumnoDpMatricula = "IdAlumnoDpMatricula",
            IdAlumnoEcMatricula = "IdAlumnoEcMatricula",
            IdAlumnoEstado = "IdAlumnoEstado",
            IdAlumnoCreateDate = "IdAlumnoCreateDate",
            IdAlumnoCreateUser = "IdAlumnoCreateUser",
            IdAlumnoLastUpdatedAt = "IdAlumnoLastUpdatedAt"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace AlumnosFamiliaresService {
        const baseUrl = "INSUDE/AlumnosFamiliares";
        function Create(request: Serenity.SaveRequest<AlumnosFamiliaresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AlumnosFamiliaresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AlumnosFamiliaresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AlumnosFamiliaresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/AlumnosFamiliares/Create",
            Update = "INSUDE/AlumnosFamiliares/Update",
            Delete = "INSUDE/AlumnosFamiliares/Delete",
            Retrieve = "INSUDE/AlumnosFamiliares/Retrieve",
            List = "INSUDE/AlumnosFamiliares/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface AlumnosForm {
        Nombres: Serenity.StringEditor;
        Apellidos: Serenity.StringEditor;
        Sexo: Serenity.LookupEditor;
        Matricula: Serenity.StringEditor;
        IdRango: Serenity.LookupEditor;
        TipoIdentificacion: Serenity.StringEditor;
        Identificacion: Serenity.StringEditor;
        EstadoCivil: Serenity.LookupEditor;
        IdPais: Serenity.LookupEditor;
        IdNacionalidad: Serenity.LookupEditor;
        IdInstitucion: Serenity.LookupEditor;
        IdDependencia: Serenity.LookupEditor;
        lstCarreras: Serenity.LookupEditor;
        FechaNacimiento: Serenity.DateEditor;
        LugarNacimiento: Serenity.StringEditor;
        FechaRegistro: Serenity.DateEditor;
        FechaIngreso: Serenity.DateEditor;
        CorreoElectronico: Serenity.StringEditor;
        TelHogar: Serenity.StringEditor;
        TelCelular: Serenity.StringEditor;
        Observaciones: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Ciudad: Serenity.StringEditor;
        IdUsuario: Serenity.IntegerEditor;
        DireccionOficina: Serenity.StringEditor;
        Funcion: Serenity.StringEditor;
        TelOficina: Serenity.StringEditor;
        DpMatricula: Serenity.StringEditor;
        EcMatricula: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
    }
    class AlumnosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface AlumnosRow {
        IdAlumno?: number;
        Nombres?: string;
        Apellidos?: string;
        Sexo?: string;
        Matricula?: string;
        FechaNacimiento?: string;
        LugarNacimiento?: string;
        FechaRegistro?: string;
        FechaIngreso?: string;
        TipoIdentificacion?: string;
        Identificacion?: string;
        EstadoCivil?: number;
        CorreoElectronico?: string;
        TelHogar?: string;
        TelCelular?: string;
        Observaciones?: string;
        Tipo?: string;
        Direccion?: string;
        Ciudad?: string;
        IdPais?: number;
        IdNacionalidad?: number;
        IdUsuario?: number;
        DireccionOficina?: string;
        Funcion?: string;
        IdInstitucion?: number;
        IdRango?: number;
        IdDependencia?: number;
        TelOficina?: string;
        DpMatricula?: string;
        EcMatricula?: string;
        Estado?: string;
        CreateDate?: string;
        CreateUser?: string;
        LastUpdatedAt?: string;
        IdPaisNombre?: string;
        IdPaisEstado?: string;
        IdPaisCreateDate?: string;
        IdPaisCreateUser?: string;
        IdNacionalidadNombre?: string;
        IdNacionalidadEstado?: string;
        IdNacionalidadCreateUser?: string;
        IdNacionalidadCreateDate?: string;
        IdInstitucionIdCompania?: number;
        IdInstitucionNombre?: string;
        IdInstitucionCreateUser?: string;
        IdInstitucionCreateDate?: string;
        IdRangoNombre?: string;
        IdDependenciaNombre?: string;
        IdSexoNombre?: string;
        IdEstadoCivilNombre?: string;
        lstCarreras?: number[];
    }
    namespace AlumnosRow {
        const idProperty = "IdAlumno";
        const nameProperty = "Nombres";
        const localTextPrefix = "INSUDE.Alumnos";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdAlumno = "IdAlumno",
            Nombres = "Nombres",
            Apellidos = "Apellidos",
            Sexo = "Sexo",
            Matricula = "Matricula",
            FechaNacimiento = "FechaNacimiento",
            LugarNacimiento = "LugarNacimiento",
            FechaRegistro = "FechaRegistro",
            FechaIngreso = "FechaIngreso",
            TipoIdentificacion = "TipoIdentificacion",
            Identificacion = "Identificacion",
            EstadoCivil = "EstadoCivil",
            CorreoElectronico = "CorreoElectronico",
            TelHogar = "TelHogar",
            TelCelular = "TelCelular",
            Observaciones = "Observaciones",
            Tipo = "Tipo",
            Direccion = "Direccion",
            Ciudad = "Ciudad",
            IdPais = "IdPais",
            IdNacionalidad = "IdNacionalidad",
            IdUsuario = "IdUsuario",
            DireccionOficina = "DireccionOficina",
            Funcion = "Funcion",
            IdInstitucion = "IdInstitucion",
            IdRango = "IdRango",
            IdDependencia = "IdDependencia",
            TelOficina = "TelOficina",
            DpMatricula = "DpMatricula",
            EcMatricula = "EcMatricula",
            Estado = "Estado",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
            LastUpdatedAt = "LastUpdatedAt",
            IdPaisNombre = "IdPaisNombre",
            IdPaisEstado = "IdPaisEstado",
            IdPaisCreateDate = "IdPaisCreateDate",
            IdPaisCreateUser = "IdPaisCreateUser",
            IdNacionalidadNombre = "IdNacionalidadNombre",
            IdNacionalidadEstado = "IdNacionalidadEstado",
            IdNacionalidadCreateUser = "IdNacionalidadCreateUser",
            IdNacionalidadCreateDate = "IdNacionalidadCreateDate",
            IdInstitucionIdCompania = "IdInstitucionIdCompania",
            IdInstitucionNombre = "IdInstitucionNombre",
            IdInstitucionCreateUser = "IdInstitucionCreateUser",
            IdInstitucionCreateDate = "IdInstitucionCreateDate",
            IdRangoNombre = "IdRangoNombre",
            IdDependenciaNombre = "IdDependenciaNombre",
            IdSexoNombre = "IdSexoNombre",
            IdEstadoCivilNombre = "IdEstadoCivilNombre",
            lstCarreras = "lstCarreras"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace AlumnosService {
        const baseUrl = "INSUDE/Alumnos";
        function Create(request: Serenity.SaveRequest<AlumnosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AlumnosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AlumnosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AlumnosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Alumnos/Create",
            Update = "INSUDE/Alumnos/Update",
            Delete = "INSUDE/Alumnos/Delete",
            Retrieve = "INSUDE/Alumnos/Retrieve",
            List = "INSUDE/Alumnos/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class CompaniaColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface CompaniaForm {
        Siglas: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        Rnc: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        Correo: Serenity.StringEditor;
        Website: Serenity.StringEditor;
    }
    class CompaniaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface CompaniaRow {
        IdCompania?: number;
        Siglas?: string;
        Nombre?: string;
        Rnc?: string;
        Direccion?: string;
        Telefono?: string;
        Fax?: string;
        Logo?: string;
        Correo?: string;
        Website?: string;
    }
    namespace CompaniaRow {
        const idProperty = "IdCompania";
        const nameProperty = "Siglas";
        const localTextPrefix = "INSUDE.Compania";
        const lookupKey = "INSUDE.Compania";
        function getLookup(): Q.Lookup<CompaniaRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdCompania = "IdCompania",
            Siglas = "Siglas",
            Nombre = "Nombre",
            Rnc = "Rnc",
            Direccion = "Direccion",
            Telefono = "Telefono",
            Fax = "Fax",
            Logo = "Logo",
            Correo = "Correo",
            Website = "Website"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace CompaniaService {
        const baseUrl = "INSUDE/Compania";
        function Create(request: Serenity.SaveRequest<CompaniaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompaniaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompaniaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompaniaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Compania/Create",
            Update = "INSUDE/Compania/Update",
            Delete = "INSUDE/Compania/Delete",
            Retrieve = "INSUDE/Compania/Retrieve",
            List = "INSUDE/Compania/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class DependenciasColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface DependenciasForm {
        Nombre: Serenity.StringEditor;
    }
    class DependenciasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface DependenciasRow {
        IdDependencia?: number;
        Nombre?: string;
    }
    namespace DependenciasRow {
        const idProperty = "IdDependencia";
        const nameProperty = "Nombre";
        const localTextPrefix = "INSUDE.Dependencias";
        const lookupKey = "INSUDE.Dependencias";
        function getLookup(): Q.Lookup<DependenciasRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdDependencia = "IdDependencia",
            Nombre = "Nombre"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace DependenciasService {
        const baseUrl = "INSUDE/Dependencias";
        function Create(request: Serenity.SaveRequest<DependenciasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DependenciasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DependenciasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DependenciasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Dependencias/Create",
            Update = "INSUDE/Dependencias/Update",
            Delete = "INSUDE/Dependencias/Delete",
            Retrieve = "INSUDE/Dependencias/Retrieve",
            List = "INSUDE/Dependencias/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class EscuelasColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface EscuelasForm {
        IdInstitucion: Serenity.LookupEditor;
        Nombre: Serenity.StringEditor;
        Siglas: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Contacto: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
    }
    class EscuelasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface EscuelasRow {
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
    namespace EscuelasRow {
        const idProperty = "IdEscuela";
        const nameProperty = "Nombre";
        const localTextPrefix = "INSUDE.Escuelas";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace MiMovieTutorial.INSUDE {
    namespace EscuelasService {
        const baseUrl = "INSUDE/Escuelas";
        function Create(request: Serenity.SaveRequest<EscuelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EscuelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EscuelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EscuelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Escuelas/Create",
            Update = "INSUDE/Escuelas/Update",
            Delete = "INSUDE/Escuelas/Delete",
            Retrieve = "INSUDE/Escuelas/Retrieve",
            List = "INSUDE/Escuelas/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class EstadocivilColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface EstadocivilForm {
        NomEstado: Serenity.StringEditor;
    }
    class EstadocivilForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface EstadocivilRow {
        CodEstado?: number;
        NomEstado?: string;
    }
    namespace EstadocivilRow {
        const idProperty = "CodEstado";
        const nameProperty = "NomEstado";
        const localTextPrefix = "INSUDE.Estadocivil";
        const lookupKey = "INSUDE.Estadocivil";
        function getLookup(): Q.Lookup<EstadocivilRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CodEstado = "CodEstado",
            NomEstado = "NomEstado"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace EstadocivilService {
        const baseUrl = "INSUDE/Estadocivil";
        function Create(request: Serenity.SaveRequest<EstadocivilRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EstadocivilRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EstadocivilRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EstadocivilRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Estadocivil/Create",
            Update = "INSUDE/Estadocivil/Update",
            Delete = "INSUDE/Estadocivil/Delete",
            Retrieve = "INSUDE/Estadocivil/Retrieve",
            List = "INSUDE/Estadocivil/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class ExistencialmaColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface ExistencialmaForm {
        CodPro: Serenity.IntegerEditor;
        Almacen: Serenity.IntegerEditor;
        Existencia: Serenity.DecimalEditor;
    }
    class ExistencialmaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface ExistencialmaRow {
        Sec?: number;
        CodPro?: number;
        Almacen?: number;
        Existencia?: number;
        CodProDesPro?: string;
        CodProPrecio?: number;
        AlmacenNomalmacen?: string;
    }
    namespace ExistencialmaRow {
        const idProperty = "Sec";
        const localTextPrefix = "INSUDE.Existencialma";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Sec = "Sec",
            CodPro = "CodPro",
            Almacen = "Almacen",
            Existencia = "Existencia",
            CodProDesPro = "CodProDesPro",
            CodProPrecio = "CodProPrecio",
            AlmacenNomalmacen = "AlmacenNomalmacen"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace ExistencialmaService {
        const baseUrl = "INSUDE/Existencialma";
        function Create(request: Serenity.SaveRequest<ExistencialmaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExistencialmaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExistencialmaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExistencialmaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Existencialma/Create",
            Update = "INSUDE/Existencialma/Update",
            Delete = "INSUDE/Existencialma/Delete",
            Retrieve = "INSUDE/Existencialma/Retrieve",
            List = "INSUDE/Existencialma/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class FacultadesColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface FacultadesForm {
        IdCompania: Serenity.LookupEditor;
        Nombre: Serenity.StringEditor;
    }
    class FacultadesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface FacultadesRow {
        IdInstitucion?: number;
        IdCompania?: number;
        Nombre?: string;
        CreateUser?: string;
        CreateDate?: string;
        IdCompaniaSiglas?: string;
        IdCompaniaNombre?: string;
        IdCompaniaRnc?: string;
        IdCompaniaDireccion?: string;
        IdCompaniaTelefono?: string;
        IdCompaniaFax?: string;
        IdCompaniaLogo?: string;
        IdCompaniaCorreo?: string;
        IdCompaniaWebsite?: string;
    }
    namespace FacultadesRow {
        const idProperty = "IdInstitucion";
        const nameProperty = "Nombre";
        const localTextPrefix = "INSUDE.Facultades";
        const lookupKey = "INSUDE.Facultades";
        function getLookup(): Q.Lookup<FacultadesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdInstitucion = "IdInstitucion",
            IdCompania = "IdCompania",
            Nombre = "Nombre",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            IdCompaniaSiglas = "IdCompaniaSiglas",
            IdCompaniaNombre = "IdCompaniaNombre",
            IdCompaniaRnc = "IdCompaniaRnc",
            IdCompaniaDireccion = "IdCompaniaDireccion",
            IdCompaniaTelefono = "IdCompaniaTelefono",
            IdCompaniaFax = "IdCompaniaFax",
            IdCompaniaLogo = "IdCompaniaLogo",
            IdCompaniaCorreo = "IdCompaniaCorreo",
            IdCompaniaWebsite = "IdCompaniaWebsite"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace FacultadesService {
        const baseUrl = "INSUDE/Facultades";
        function Create(request: Serenity.SaveRequest<FacultadesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FacultadesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FacultadesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FacultadesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Facultades/Create",
            Update = "INSUDE/Facultades/Update",
            Delete = "INSUDE/Facultades/Delete",
            Retrieve = "INSUDE/Facultades/Retrieve",
            List = "INSUDE/Facultades/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class IndicesColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface IndicesForm {
        Literal: Serenity.StringEditor;
        Puntos: Serenity.IntegerEditor;
        Rango1: Serenity.IntegerEditor;
        Rango2: Serenity.IntegerEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
    }
    class IndicesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface IndicesRow {
        IdIndice?: number;
        Literal?: string;
        Puntos?: number;
        Rango1?: number;
        Rango2?: number;
        CreateDate?: string;
        CreateUser?: string;
        Descripcion?: string;
    }
    namespace IndicesRow {
        const idProperty = "IdIndice";
        const nameProperty = "Literal";
        const localTextPrefix = "INSUDE.Indices";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdIndice = "IdIndice",
            Literal = "Literal",
            Puntos = "Puntos",
            Rango1 = "Rango1",
            Rango2 = "Rango2",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
            Descripcion = "Descripcion"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace IndicesService {
        const baseUrl = "INSUDE/Indices";
        function Create(request: Serenity.SaveRequest<IndicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<IndicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<IndicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<IndicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Indices/Create",
            Update = "INSUDE/Indices/Update",
            Delete = "INSUDE/Indices/Delete",
            Retrieve = "INSUDE/Indices/Retrieve",
            List = "INSUDE/Indices/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class InstructoresColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface InstructoresForm {
        Codigo: Serenity.StringEditor;
        Nombres: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        NivelAcademico: Serenity.StringEditor;
        IdUsuario: Serenity.IntegerEditor;
        Estado: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        Identificacion: Serenity.StringEditor;
        TipoIdentificacion: Serenity.StringEditor;
        LastUpdatedAt: Serenity.DateEditor;
        FechaIngreso: Serenity.DateEditor;
        CorreoElectronico: Serenity.StringEditor;
        Sexo: Serenity.StringEditor;
    }
    class InstructoresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface InstructoresRow {
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
    namespace InstructoresRow {
        const idProperty = "IdInstructor";
        const nameProperty = "Codigo";
        const localTextPrefix = "INSUDE.Instructores";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace MiMovieTutorial.INSUDE {
    namespace InstructoresService {
        const baseUrl = "INSUDE/Instructores";
        function Create(request: Serenity.SaveRequest<InstructoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InstructoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InstructoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InstructoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Instructores/Create",
            Update = "INSUDE/Instructores/Update",
            Delete = "INSUDE/Instructores/Delete",
            Retrieve = "INSUDE/Instructores/Retrieve",
            List = "INSUDE/Instructores/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class MalmacenColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface MalmacenForm {
        Nomalmacen: Serenity.StringEditor;
    }
    class MalmacenForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface MalmacenRow {
        Almacenid?: number;
        Nomalmacen?: string;
    }
    namespace MalmacenRow {
        const idProperty = "Almacenid";
        const nameProperty = "Nomalmacen";
        const localTextPrefix = "INSUDE.Malmacen";
        const lookupKey = "INSUEDE.Malmacen";
        function getLookup(): Q.Lookup<MalmacenRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Almacenid = "Almacenid",
            Nomalmacen = "Nomalmacen"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace MalmacenService {
        const baseUrl = "INSUDE/Malmacen";
        function Create(request: Serenity.SaveRequest<MalmacenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MalmacenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MalmacenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MalmacenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Malmacen/Create",
            Update = "INSUDE/Malmacen/Update",
            Delete = "INSUDE/Malmacen/Delete",
            Retrieve = "INSUDE/Malmacen/Retrieve",
            List = "INSUDE/Malmacen/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class MateriasColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface MateriasForm {
        IdEscuela: Serenity.IntegerEditor;
        Codigo: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
    }
    class MateriasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface MateriasRow {
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
    namespace MateriasRow {
        const idProperty = "IdMateria";
        const nameProperty = "Codigo";
        const localTextPrefix = "INSUDE.Materias";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace MiMovieTutorial.INSUDE {
    namespace MateriasService {
        const baseUrl = "INSUDE/Materias";
        function Create(request: Serenity.SaveRequest<MateriasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MateriasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MateriasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MateriasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Materias/Create",
            Update = "INSUDE/Materias/Update",
            Delete = "INSUDE/Materias/Delete",
            Retrieve = "INSUDE/Materias/Retrieve",
            List = "INSUDE/Materias/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class MproductColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface MproductForm {
        DesPro: Serenity.StringEditor;
        Precio: Serenity.DecimalEditor;
        ListaExistencia: ExistenciAlmaEditor;
    }
    class MproductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface MproductRow {
        CodPro?: number;
        DesPro?: string;
        Precio?: number;
    }
    namespace MproductRow {
        const idProperty = "CodPro";
        const nameProperty = "DesPro";
        const localTextPrefix = "INSUDE.Mproduct";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CodPro = "CodPro",
            DesPro = "DesPro",
            Precio = "Precio"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace MproductService {
        const baseUrl = "INSUDE/Mproduct";
        function Create(request: Serenity.SaveRequest<MproductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MproductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MproductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MproductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Mproduct/Create",
            Update = "INSUDE/Mproduct/Update",
            Delete = "INSUDE/Mproduct/Delete",
            Retrieve = "INSUDE/Mproduct/Retrieve",
            List = "INSUDE/Mproduct/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class NacionalidadColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface NacionalidadForm {
        Nombre: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
    }
    class NacionalidadForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface NacionalidadRow {
        IdNacionalidad?: number;
        Nombre?: string;
        Estado?: string;
        CreateUser?: string;
        CreateDate?: string;
    }
    namespace NacionalidadRow {
        const idProperty = "IdNacionalidad";
        const nameProperty = "Nombre";
        const localTextPrefix = "INSUDE.Nacionalidad";
        const lookupKey = "INSUDE.Nacionalidad";
        function getLookup(): Q.Lookup<NacionalidadRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdNacionalidad = "IdNacionalidad",
            Nombre = "Nombre",
            Estado = "Estado",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace NacionalidadService {
        const baseUrl = "INSUDE/Nacionalidad";
        function Create(request: Serenity.SaveRequest<NacionalidadRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NacionalidadRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NacionalidadRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NacionalidadRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Nacionalidad/Create",
            Update = "INSUDE/Nacionalidad/Update",
            Delete = "INSUDE/Nacionalidad/Delete",
            Retrieve = "INSUDE/Nacionalidad/Retrieve",
            List = "INSUDE/Nacionalidad/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class NivelesPorCarreraColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface NivelesPorCarreraForm {
        IdTitulo: Serenity.IntegerEditor;
        Nombre: Serenity.StringEditor;
        Orden: Serenity.IntegerEditor;
        IdTipoCalificacion: Serenity.IntegerEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
    }
    class NivelesPorCarreraForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface NivelesPorCarreraRow {
        IdTituloNivel?: number;
        IdTitulo?: number;
        Nombre?: string;
        Orden?: number;
        IdTipoCalificacion?: number;
        CreateDate?: string;
        CreateUser?: string;
        IdTituloCodigo?: string;
        IdTituloNombre?: string;
        IdTituloMencion?: string;
        IdTituloIdEscuela?: number;
        IdTituloIdPensum?: number;
        IdTituloMontoInscripcion?: number;
        IdTituloCosto?: number;
        IdTituloCostoCredito?: boolean;
        IdTituloTituloOtorgado?: string;
        IdTituloIdRequisitoNacional?: number;
        IdTituloIdRequisitoExtrangero?: number;
        IdTituloTipoMatricula?: string;
        IdTituloEstado?: string;
        IdTituloCreateDate?: string;
        IdTituloCreateUser?: string;
        IdTituloCicloAcademico?: string;
        IdTipoCalificacionNombre?: string;
        IdTipoCalificacionCreateDate?: string;
        IdTipoCalificacionCreateUser?: string;
    }
    namespace NivelesPorCarreraRow {
        const idProperty = "IdTituloNivel";
        const nameProperty = "Nombre";
        const localTextPrefix = "INSUDE.NivelesPorCarrera";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdTituloNivel = "IdTituloNivel",
            IdTitulo = "IdTitulo",
            Nombre = "Nombre",
            Orden = "Orden",
            IdTipoCalificacion = "IdTipoCalificacion",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
            IdTituloCodigo = "IdTituloCodigo",
            IdTituloNombre = "IdTituloNombre",
            IdTituloMencion = "IdTituloMencion",
            IdTituloIdEscuela = "IdTituloIdEscuela",
            IdTituloIdPensum = "IdTituloIdPensum",
            IdTituloMontoInscripcion = "IdTituloMontoInscripcion",
            IdTituloCosto = "IdTituloCosto",
            IdTituloCostoCredito = "IdTituloCostoCredito",
            IdTituloTituloOtorgado = "IdTituloTituloOtorgado",
            IdTituloIdRequisitoNacional = "IdTituloIdRequisitoNacional",
            IdTituloIdRequisitoExtrangero = "IdTituloIdRequisitoExtrangero",
            IdTituloTipoMatricula = "IdTituloTipoMatricula",
            IdTituloEstado = "IdTituloEstado",
            IdTituloCreateDate = "IdTituloCreateDate",
            IdTituloCreateUser = "IdTituloCreateUser",
            IdTituloCicloAcademico = "IdTituloCicloAcademico",
            IdTipoCalificacionNombre = "IdTipoCalificacionNombre",
            IdTipoCalificacionCreateDate = "IdTipoCalificacionCreateDate",
            IdTipoCalificacionCreateUser = "IdTipoCalificacionCreateUser"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace NivelesPorCarreraService {
        const baseUrl = "INSUDE/NivelesPorCarrera";
        function Create(request: Serenity.SaveRequest<NivelesPorCarreraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NivelesPorCarreraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NivelesPorCarreraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NivelesPorCarreraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/NivelesPorCarrera/Create",
            Update = "INSUDE/NivelesPorCarrera/Update",
            Delete = "INSUDE/NivelesPorCarrera/Delete",
            Retrieve = "INSUDE/NivelesPorCarrera/Retrieve",
            List = "INSUDE/NivelesPorCarrera/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PaisColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface PaisForm {
        Nombre: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
    }
    class PaisForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface PaisRow {
        IdPais?: number;
        Nombre?: string;
        Estado?: string;
        CreateDate?: string;
        CreateUser?: string;
    }
    namespace PaisRow {
        const idProperty = "IdPais";
        const nameProperty = "Nombre";
        const localTextPrefix = "INSUDE.Pais";
        const lookupKey = "INSUDE.Pais";
        function getLookup(): Q.Lookup<PaisRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdPais = "IdPais",
            Nombre = "Nombre",
            Estado = "Estado",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace PaisService {
        const baseUrl = "INSUDE/Pais";
        function Create(request: Serenity.SaveRequest<PaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Pais/Create",
            Update = "INSUDE/Pais/Update",
            Delete = "INSUDE/Pais/Delete",
            Retrieve = "INSUDE/Pais/Retrieve",
            List = "INSUDE/Pais/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PensumColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface PensumForm {
        IdTitulo: Serenity.IntegerEditor;
        Codigo: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        IdStatus: Serenity.LookupEditor;
    }
    class PensumForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface PensumRow {
        IdPensum?: number;
        IdTitulo?: number;
        Codigo?: string;
        Nombre?: string;
        Estado?: string;
        CreateDate?: string;
        CreateUser?: string;
        LastUpdatedAt?: string;
        IdTituloCodigo?: string;
        IdTituloNombre?: string;
        IdTituloMencion?: string;
        IdTituloIdEscuela?: number;
        IdTituloIdPensum?: number;
        IdTituloMontoInscripcion?: number;
        IdTituloCosto?: number;
        IdTituloCostoCredito?: boolean;
        IdTituloTituloOtorgado?: string;
        IdTituloIdRequisitoNacional?: number;
        IdTituloIdRequisitoExtrangero?: number;
        IdTituloTipoMatricula?: string;
        IdTituloEstado?: string;
        IdTituloCreateDate?: string;
        IdTituloCreateUser?: string;
        IdTituloCicloAcademico?: string;
        IdStatus?: number;
        IdStatusNombre?: string;
    }
    namespace PensumRow {
        const idProperty = "IdPensum";
        const nameProperty = "Codigo";
        const localTextPrefix = "INSUDE.Pensum";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdPensum = "IdPensum",
            IdTitulo = "IdTitulo",
            Codigo = "Codigo",
            Nombre = "Nombre",
            Estado = "Estado",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
            LastUpdatedAt = "LastUpdatedAt",
            IdTituloCodigo = "IdTituloCodigo",
            IdTituloNombre = "IdTituloNombre",
            IdTituloMencion = "IdTituloMencion",
            IdTituloIdEscuela = "IdTituloIdEscuela",
            IdTituloIdPensum = "IdTituloIdPensum",
            IdTituloMontoInscripcion = "IdTituloMontoInscripcion",
            IdTituloCosto = "IdTituloCosto",
            IdTituloCostoCredito = "IdTituloCostoCredito",
            IdTituloTituloOtorgado = "IdTituloTituloOtorgado",
            IdTituloIdRequisitoNacional = "IdTituloIdRequisitoNacional",
            IdTituloIdRequisitoExtrangero = "IdTituloIdRequisitoExtrangero",
            IdTituloTipoMatricula = "IdTituloTipoMatricula",
            IdTituloEstado = "IdTituloEstado",
            IdTituloCreateDate = "IdTituloCreateDate",
            IdTituloCreateUser = "IdTituloCreateUser",
            IdTituloCicloAcademico = "IdTituloCicloAcademico",
            IdStatus = "IdStatus",
            IdStatusNombre = "IdStatusNombre"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace PensumService {
        const baseUrl = "INSUDE/Pensum";
        function Create(request: Serenity.SaveRequest<PensumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PensumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PensumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PensumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Pensum/Create",
            Update = "INSUDE/Pensum/Update",
            Delete = "INSUDE/Pensum/Delete",
            Retrieve = "INSUDE/Pensum/Retrieve",
            List = "INSUDE/Pensum/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PrivilegiosColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface PrivilegiosForm {
        Rol: Serenity.StringEditor;
        TipoUsuario: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
    }
    class PrivilegiosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface PrivilegiosRow {
        IdRol?: number;
        Rol?: string;
        TipoUsuario?: string;
        Descripcion?: string;
        CreateUser?: string;
        CreateDate?: string;
        LastUpdatedAt?: string;
    }
    namespace PrivilegiosRow {
        const idProperty = "IdRol";
        const nameProperty = "Rol";
        const localTextPrefix = "INSUDE.Privilegios";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace MiMovieTutorial.INSUDE {
    namespace PrivilegiosService {
        const baseUrl = "INSUDE/Privilegios";
        function Create(request: Serenity.SaveRequest<PrivilegiosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PrivilegiosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PrivilegiosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PrivilegiosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Privilegios/Create",
            Update = "INSUDE/Privilegios/Update",
            Delete = "INSUDE/Privilegios/Delete",
            Retrieve = "INSUDE/Privilegios/Retrieve",
            List = "INSUDE/Privilegios/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PromocionesColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface PromocionesForm {
        IdTitulo: Serenity.IntegerEditor;
        Descripcion: Serenity.StringEditor;
        YearInicio: Serenity.IntegerEditor;
        YearFin: Serenity.IntegerEditor;
        Estado: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
    }
    class PromocionesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface PromocionesRow {
        IdPromocion?: number;
        IdTitulo?: number;
        Descripcion?: string;
        YearInicio?: number;
        YearFin?: number;
        Estado?: string;
        CreateDate?: string;
        LastUpdatedAt?: string;
        IdTituloCodigo?: string;
        IdTituloNombre?: string;
        IdTituloMencion?: string;
        IdTituloIdEscuela?: number;
        IdTituloIdPensum?: number;
        IdTituloMontoInscripcion?: number;
        IdTituloCosto?: number;
        IdTituloCostoCredito?: boolean;
        IdTituloTituloOtorgado?: string;
        IdTituloIdRequisitoNacional?: number;
        IdTituloIdRequisitoExtrangero?: number;
        IdTituloTipoMatricula?: string;
        IdTituloEstado?: string;
        IdTituloCreateDate?: string;
        IdTituloCreateUser?: string;
        IdTituloCicloAcademico?: string;
    }
    namespace PromocionesRow {
        const idProperty = "IdPromocion";
        const nameProperty = "Descripcion";
        const localTextPrefix = "INSUDE.Promociones";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdPromocion = "IdPromocion",
            IdTitulo = "IdTitulo",
            Descripcion = "Descripcion",
            YearInicio = "YearInicio",
            YearFin = "YearFin",
            Estado = "Estado",
            CreateDate = "CreateDate",
            LastUpdatedAt = "LastUpdatedAt",
            IdTituloCodigo = "IdTituloCodigo",
            IdTituloNombre = "IdTituloNombre",
            IdTituloMencion = "IdTituloMencion",
            IdTituloIdEscuela = "IdTituloIdEscuela",
            IdTituloIdPensum = "IdTituloIdPensum",
            IdTituloMontoInscripcion = "IdTituloMontoInscripcion",
            IdTituloCosto = "IdTituloCosto",
            IdTituloCostoCredito = "IdTituloCostoCredito",
            IdTituloTituloOtorgado = "IdTituloTituloOtorgado",
            IdTituloIdRequisitoNacional = "IdTituloIdRequisitoNacional",
            IdTituloIdRequisitoExtrangero = "IdTituloIdRequisitoExtrangero",
            IdTituloTipoMatricula = "IdTituloTipoMatricula",
            IdTituloEstado = "IdTituloEstado",
            IdTituloCreateDate = "IdTituloCreateDate",
            IdTituloCreateUser = "IdTituloCreateUser",
            IdTituloCicloAcademico = "IdTituloCicloAcademico"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace PromocionesService {
        const baseUrl = "INSUDE/Promociones";
        function Create(request: Serenity.SaveRequest<PromocionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PromocionesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PromocionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PromocionesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Promociones/Create",
            Update = "INSUDE/Promociones/Update",
            Delete = "INSUDE/Promociones/Delete",
            Retrieve = "INSUDE/Promociones/Retrieve",
            List = "INSUDE/Promociones/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class RangosColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface RangosForm {
        Nombre: Serenity.StringEditor;
    }
    class RangosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface RangosRow {
        IdRango?: number;
        Nombre?: string;
    }
    namespace RangosRow {
        const idProperty = "IdRango";
        const nameProperty = "Nombre";
        const localTextPrefix = "INSUDE.Rangos";
        const lookupKey = "INSUDE.Rangos";
        function getLookup(): Q.Lookup<RangosRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdRango = "IdRango",
            Nombre = "Nombre"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace RangosService {
        const baseUrl = "INSUDE/Rangos";
        function Create(request: Serenity.SaveRequest<RangosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RangosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RangosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RangosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Rangos/Create",
            Update = "INSUDE/Rangos/Update",
            Delete = "INSUDE/Rangos/Delete",
            Retrieve = "INSUDE/Rangos/Retrieve",
            List = "INSUDE/Rangos/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class RequisitosColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface RequisitosForm {
        Nombre: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
    }
    class RequisitosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface RequisitosRow {
        IdRequisito?: number;
        Nombre?: string;
        CreateUser?: string;
        CreateDate?: string;
    }
    namespace RequisitosRow {
        const idProperty = "IdRequisito";
        const nameProperty = "Nombre";
        const localTextPrefix = "INSUDE.Requisitos";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdRequisito = "IdRequisito",
            Nombre = "Nombre",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace RequisitosService {
        const baseUrl = "INSUDE/Requisitos";
        function Create(request: Serenity.SaveRequest<RequisitosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RequisitosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequisitosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequisitosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Requisitos/Create",
            Update = "INSUDE/Requisitos/Update",
            Delete = "INSUDE/Requisitos/Delete",
            Retrieve = "INSUDE/Requisitos/Retrieve",
            List = "INSUDE/Requisitos/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class ServiciosEstudiantilesColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface ServiciosEstudiantilesForm {
        Descripcion: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
    }
    class ServiciosEstudiantilesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface ServiciosEstudiantilesRow {
        Id?: number;
        Descripcion?: string;
        CreateDate?: string;
        LastUpdatedAt?: string;
        CreateUser?: string;
    }
    namespace ServiciosEstudiantilesRow {
        const idProperty = "Id";
        const nameProperty = "Descripcion";
        const localTextPrefix = "INSUDE.ServiciosEstudiantiles";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Descripcion = "Descripcion",
            CreateDate = "CreateDate",
            LastUpdatedAt = "LastUpdatedAt",
            CreateUser = "CreateUser"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace ServiciosEstudiantilesService {
        const baseUrl = "INSUDE/ServiciosEstudiantiles";
        function Create(request: Serenity.SaveRequest<ServiciosEstudiantilesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ServiciosEstudiantilesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiciosEstudiantilesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiciosEstudiantilesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/ServiciosEstudiantiles/Create",
            Update = "INSUDE/ServiciosEstudiantiles/Update",
            Delete = "INSUDE/ServiciosEstudiantiles/Delete",
            Retrieve = "INSUDE/ServiciosEstudiantiles/Retrieve",
            List = "INSUDE/ServiciosEstudiantiles/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class SexoColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface SexoForm {
        Nomsexo: Serenity.StringEditor;
    }
    class SexoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface SexoRow {
        Codsexo?: string;
        Nomsexo?: string;
    }
    namespace SexoRow {
        const idProperty = "Codsexo";
        const nameProperty = "Codsexo";
        const localTextPrefix = "INSUDE.Sexo";
        const lookupKey = "INSUDE.Sexo";
        function getLookup(): Q.Lookup<SexoRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Codsexo = "Codsexo",
            Nomsexo = "Nomsexo"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace SexoService {
        const baseUrl = "INSUDE/Sexo";
        function Create(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Sexo/Create",
            Update = "INSUDE/Sexo/Update",
            Delete = "INSUDE/Sexo/Delete",
            Retrieve = "INSUDE/Sexo/Retrieve",
            List = "INSUDE/Sexo/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class StatusColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface StatusForm {
        NomStatus: Serenity.StringEditor;
    }
    class StatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface StatusRow {
        IdStatus?: number;
        NomStatus?: string;
    }
    namespace StatusRow {
        const idProperty = "IdStatus";
        const nameProperty = "NomStatus";
        const localTextPrefix = "INSUDE.Status";
        const lookupKey = "INSUDE.Status";
        function getLookup(): Q.Lookup<StatusRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdStatus = "IdStatus",
            NomStatus = "NomStatus"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace StatusService {
        const baseUrl = "INSUDE/Status";
        function Create(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Status/Create",
            Update = "INSUDE/Status/Update",
            Delete = "INSUDE/Status/Delete",
            Retrieve = "INSUDE/Status/Retrieve",
            List = "INSUDE/Status/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class TipoDeCalificacionColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface TipoDeCalificacionForm {
        Nombre: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
    }
    class TipoDeCalificacionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface TipoDeCalificacionRow {
        IdTipoCalificacion?: number;
        Nombre?: string;
        CreateDate?: string;
        CreateUser?: string;
    }
    namespace TipoDeCalificacionRow {
        const idProperty = "IdTipoCalificacion";
        const nameProperty = "Nombre";
        const localTextPrefix = "INSUDE.TipoDeCalificacion";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdTipoCalificacion = "IdTipoCalificacion",
            Nombre = "Nombre",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace TipoDeCalificacionService {
        const baseUrl = "INSUDE/TipoDeCalificacion";
        function Create(request: Serenity.SaveRequest<TipoDeCalificacionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoDeCalificacionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoDeCalificacionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoDeCalificacionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/TipoDeCalificacion/Create",
            Update = "INSUDE/TipoDeCalificacion/Update",
            Delete = "INSUDE/TipoDeCalificacion/Delete",
            Retrieve = "INSUDE/TipoDeCalificacion/Retrieve",
            List = "INSUDE/TipoDeCalificacion/List"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class TitulosColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface TitulosForm {
        Codigo: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        Mencion: Serenity.StringEditor;
        IdEscuela: Serenity.IntegerEditor;
        IdPensum: Serenity.IntegerEditor;
        MontoInscripcion: Serenity.DecimalEditor;
        Costo: Serenity.DecimalEditor;
        CostoCredito: Serenity.BooleanEditor;
        TituloOtorgado: Serenity.StringEditor;
        IdRequisitoNacional: Serenity.IntegerEditor;
        IdRequisitoExtrangero: Serenity.IntegerEditor;
        TipoMatricula: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
        CicloAcademico: Serenity.StringEditor;
    }
    class TitulosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    interface TitulosRow {
        IdTitulo?: number;
        Codigo?: string;
        Nombre?: string;
        Mencion?: string;
        IdEscuela?: number;
        IdPensum?: number;
        MontoInscripcion?: number;
        Costo?: number;
        CostoCredito?: boolean;
        TituloOtorgado?: string;
        IdRequisitoNacional?: number;
        IdRequisitoExtrangero?: number;
        TipoMatricula?: string;
        Estado?: string;
        CreateDate?: string;
        CreateUser?: string;
        CicloAcademico?: string;
        IdEscuelaIdInstitucion?: number;
        IdEscuelaNombre?: string;
        IdEscuelaSiglas?: string;
        IdEscuelaDireccion?: string;
        IdEscuelaTelefono?: string;
        IdEscuelaContacto?: string;
        IdEscuelaEstado?: string;
        IdEscuelaCreateUser?: string;
        IdEscuelaCreateDate?: string;
        IdRequisitoNacionalNombre?: string;
        IdRequisitoNacionalCreateUser?: string;
        IdRequisitoNacionalCreateDate?: string;
        IdRequisitoExtrangeroNombre?: string;
        IdRequisitoExtrangeroCreateUser?: string;
        IdRequisitoExtrangeroCreateDate?: string;
    }
    namespace TitulosRow {
        const idProperty = "IdTitulo";
        const nameProperty = "Codigo";
        const localTextPrefix = "INSUDE.Titulos";
        const lookupKey = "INSUDE.Titulos";
        function getLookup(): Q.Lookup<TitulosRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdTitulo = "IdTitulo",
            Codigo = "Codigo",
            Nombre = "Nombre",
            Mencion = "Mencion",
            IdEscuela = "IdEscuela",
            IdPensum = "IdPensum",
            MontoInscripcion = "MontoInscripcion",
            Costo = "Costo",
            CostoCredito = "CostoCredito",
            TituloOtorgado = "TituloOtorgado",
            IdRequisitoNacional = "IdRequisitoNacional",
            IdRequisitoExtrangero = "IdRequisitoExtrangero",
            TipoMatricula = "TipoMatricula",
            Estado = "Estado",
            CreateDate = "CreateDate",
            CreateUser = "CreateUser",
            CicloAcademico = "CicloAcademico",
            IdEscuelaIdInstitucion = "IdEscuelaIdInstitucion",
            IdEscuelaNombre = "IdEscuelaNombre",
            IdEscuelaSiglas = "IdEscuelaSiglas",
            IdEscuelaDireccion = "IdEscuelaDireccion",
            IdEscuelaTelefono = "IdEscuelaTelefono",
            IdEscuelaContacto = "IdEscuelaContacto",
            IdEscuelaEstado = "IdEscuelaEstado",
            IdEscuelaCreateUser = "IdEscuelaCreateUser",
            IdEscuelaCreateDate = "IdEscuelaCreateDate",
            IdRequisitoNacionalNombre = "IdRequisitoNacionalNombre",
            IdRequisitoNacionalCreateUser = "IdRequisitoNacionalCreateUser",
            IdRequisitoNacionalCreateDate = "IdRequisitoNacionalCreateDate",
            IdRequisitoExtrangeroNombre = "IdRequisitoExtrangeroNombre",
            IdRequisitoExtrangeroCreateUser = "IdRequisitoExtrangeroCreateUser",
            IdRequisitoExtrangeroCreateDate = "IdRequisitoExtrangeroCreateDate"
        }
    }
}
declare namespace MiMovieTutorial.INSUDE {
    namespace TitulosService {
        const baseUrl = "INSUDE/Titulos";
        function Create(request: Serenity.SaveRequest<TitulosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TitulosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TitulosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TitulosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "INSUDE/Titulos/Create",
            Update = "INSUDE/Titulos/Update",
            Delete = "INSUDE/Titulos/Delete",
            Retrieve = "INSUDE/Titulos/Retrieve",
            List = "INSUDE/Titulos/List"
        }
    }
}
declare namespace INSUDE_SIAR.Web.Modules.MovieDB {
    enum Gender {
        Male = 1,
        Female = 2,
        Pajaro = 3
    }
}
declare namespace INSUDE_SIAR.Web.Modules.MovieDB.Person {
    class PersonMovieColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace MiMovieTutorial.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace MiMovieTutorial.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace MiMovieTutorial.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace MiMovieTutorial.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class GenreColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    interface GenreForm {
        Name: Serenity.StringEditor;
    }
    class GenreForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.MovieDB {
    interface GenreRow {
        GenreId?: number;
        Name?: string;
    }
    namespace GenreRow {
        const idProperty = "GenreId";
        const nameProperty = "Name";
        const localTextPrefix = "MovieDB.Genre";
        const lookupKey = "MovieDB.Genre";
        function getLookup(): Q.Lookup<GenreRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            GenreId = "GenreId",
            Name = "Name"
        }
    }
}
declare namespace MiMovieTutorial.MovieDB {
    namespace GenreService {
        const baseUrl = "MovieDB/Genre";
        function Create(request: Serenity.SaveRequest<GenreRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GenreRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GenreRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GenreRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "MovieDB/Genre/Create",
            Update = "MovieDB/Genre/Update",
            Delete = "MovieDB/Genre/Delete",
            Retrieve = "MovieDB/Genre/Retrieve",
            List = "MovieDB/Genre/List"
        }
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class MovieCastColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    interface MovieCastForm {
        PersonId: Serenity.LookupEditor;
        Character: Serenity.StringEditor;
    }
    class MovieCastForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.MovieDB {
    interface MovieCastRow {
        MovieCastId?: number;
        MovieId?: number;
        PersonId?: number;
        Character?: string;
        MovieTitle?: string;
        MovieDescription?: string;
        MovieStoryline?: string;
        MovieYear?: number;
        MovieReleaseDate?: string;
        MovieRuntime?: number;
        MovieKind?: number;
        PersonFirstname?: string;
        PersonLastname?: string;
        PersonBirthDate?: string;
        PersonBirthPlace?: string;
        PersonGender?: number;
        PersonHeight?: number;
        PersonFullname?: string;
    }
    namespace MovieCastRow {
        const idProperty = "MovieCastId";
        const nameProperty = "Character";
        const localTextPrefix = "MovieDB.MovieCast";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MovieCastId = "MovieCastId",
            MovieId = "MovieId",
            PersonId = "PersonId",
            Character = "Character",
            MovieTitle = "MovieTitle",
            MovieDescription = "MovieDescription",
            MovieStoryline = "MovieStoryline",
            MovieYear = "MovieYear",
            MovieReleaseDate = "MovieReleaseDate",
            MovieRuntime = "MovieRuntime",
            MovieKind = "MovieKind",
            PersonFirstname = "PersonFirstname",
            PersonLastname = "PersonLastname",
            PersonBirthDate = "PersonBirthDate",
            PersonBirthPlace = "PersonBirthPlace",
            PersonGender = "PersonGender",
            PersonHeight = "PersonHeight",
            PersonFullname = "PersonFullname"
        }
    }
}
declare namespace MiMovieTutorial.MovieDB {
    namespace MovieCastService {
        const baseUrl = "MovieDB/MovieCast";
        function Create(request: Serenity.SaveRequest<MovieCastRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MovieCastRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MovieCastRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MovieCastRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "MovieDB/MovieCast/Create",
            Update = "MovieDB/MovieCast/Update",
            Delete = "MovieDB/MovieCast/Delete",
            Retrieve = "MovieDB/MovieCast/Retrieve",
            List = "MovieDB/MovieCast/List"
        }
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class MovieColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    interface MovieForm {
        Title: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        CastList: MovieDB.Entities.MovieCastEditor;
        PrimaryImage: Serenity.ImageUploadEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
        Storyline: Serenity.TextAreaEditor;
        Year: Serenity.IntegerEditor;
        ReleaseDate: Serenity.DateEditor;
        Runtime: Serenity.IntegerEditor;
        Kind: Serenity.EnumEditor;
        GenreList: Serenity.LookupEditor;
    }
    class MovieForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.MovieDB {
    interface MovieGenresRow {
        MovieGenreId?: number;
        MovieId?: number;
        GenreId?: number;
        MovieTitle?: string;
        MovieDescription?: string;
        MovieStoryline?: string;
        MovieYear?: number;
        MovieReleaseDate?: string;
        MovieRuntime?: number;
        MovieKind?: number;
        GenreName?: string;
    }
    namespace MovieGenresRow {
        const idProperty = "MovieGenreId";
        const localTextPrefix = "MovieDB.MovieGenres";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MovieGenreId = "MovieGenreId",
            MovieId = "MovieId",
            GenreId = "GenreId",
            MovieTitle = "MovieTitle",
            MovieDescription = "MovieDescription",
            MovieStoryline = "MovieStoryline",
            MovieYear = "MovieYear",
            MovieReleaseDate = "MovieReleaseDate",
            MovieRuntime = "MovieRuntime",
            MovieKind = "MovieKind",
            GenreName = "GenreName"
        }
    }
}
declare namespace MiMovieTutorial.MovieDB {
    interface MovieRow {
        MovieId?: number;
        Title?: string;
        Description?: string;
        Storyline?: string;
        Year?: number;
        ReleaseDate?: string;
        Runtime?: number;
        Kind?: Web.Modules.MovieDB.Movie.MovieKind;
        GenreList?: number[];
        CastList?: MovieCastRow[];
        PrimaryImage?: string;
        GalleryImages?: string;
    }
    namespace MovieRow {
        const idProperty = "MovieId";
        const nameProperty = "Title";
        const localTextPrefix = "MovieDB.Movie";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MovieId = "MovieId",
            Title = "Title",
            Description = "Description",
            Storyline = "Storyline",
            Year = "Year",
            ReleaseDate = "ReleaseDate",
            Runtime = "Runtime",
            Kind = "Kind",
            GenreList = "GenreList",
            CastList = "CastList",
            PrimaryImage = "PrimaryImage",
            GalleryImages = "GalleryImages"
        }
    }
}
declare namespace MiMovieTutorial.MovieDB {
    namespace MovieService {
        const baseUrl = "MovieDB/Movie";
        function Create(request: Serenity.SaveRequest<MovieRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MovieRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MovieRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Web.Modules.MovieDB.Movie.MovieListRequest, onSuccess?: (response: Serenity.ListResponse<MovieRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "MovieDB/Movie/Create",
            Update = "MovieDB/Movie/Update",
            Delete = "MovieDB/Movie/Delete",
            Retrieve = "MovieDB/Movie/Retrieve",
            List = "MovieDB/Movie/List"
        }
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class PersonColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    interface PersonForm {
        Firstname: Serenity.StringEditor;
        Lastname: Serenity.StringEditor;
        PrimaryImage: Serenity.ImageUploadEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
        BirthDate: Serenity.DateEditor;
        BirthPlace: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        Height: Serenity.IntegerEditor;
    }
    class PersonForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.MovieDB {
    interface PersonRow {
        PersonId?: number;
        Firstname?: string;
        Lastname?: string;
        BirthDate?: string;
        BirthPlace?: string;
        Gender?: INSUDE_SIAR.Web.Modules.MovieDB.Gender;
        Height?: number;
        Fullname?: string;
        PrimaryImage?: string;
        GalleryImages?: string;
    }
    namespace PersonRow {
        const idProperty = "PersonId";
        const nameProperty = "Firstname";
        const localTextPrefix = "MovieDB.Person";
        const lookupKey = "MovieDB.Person";
        function getLookup(): Q.Lookup<PersonRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PersonId = "PersonId",
            Firstname = "Firstname",
            Lastname = "Lastname",
            BirthDate = "BirthDate",
            BirthPlace = "BirthPlace",
            Gender = "Gender",
            Height = "Height",
            Fullname = "Fullname",
            PrimaryImage = "PrimaryImage",
            GalleryImages = "GalleryImages"
        }
    }
}
declare namespace MiMovieTutorial.MovieDB {
    namespace PersonService {
        const baseUrl = "MovieDB/Person";
        function Create(request: Serenity.SaveRequest<PersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "MovieDB/Person/Create",
            Update = "MovieDB/Person/Update",
            Delete = "MovieDB/Person/Delete",
            Retrieve = "MovieDB/Person/Retrieve",
            List = "MovieDB/Person/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    class CategoryColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty = "Id";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.CategoryLang";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace CategoryLangService {
        const baseUrl = "Northwind/CategoryLang";
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/CategoryLang/Create",
            Update = "Northwind/CategoryLang/Update",
            Delete = "Northwind/CategoryLang/Delete",
            Retrieve = "Northwind/CategoryLang/Retrieve",
            List = "Northwind/CategoryLang/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty = "CategoryID";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.Category";
        const lookupKey = "Northwind.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            CategoryID = "CategoryID",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace CategoryService {
        const baseUrl = "Northwind/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Category/Create",
            Update = "Northwind/Category/Update",
            Delete = "Northwind/Category/Delete",
            Retrieve = "Northwind/Category/Retrieve",
            List = "Northwind/Category/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    class CustomerColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty = "ID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.CustomerCustomerDemo";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CustomerTypeID = "CustomerTypeID",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerAddress = "CustomerAddress",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerTypeCustomerDesc = "CustomerTypeCustomerDesc"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty = "ID";
        const nameProperty = "CustomerTypeID";
        const localTextPrefix = "Northwind.CustomerDemographic";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ID = "ID",
            CustomerTypeID = "CustomerTypeID",
            CustomerDesc = "CustomerDesc"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CustomerDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }
    namespace CustomerDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Northwind.CustomerDetails";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            LastContactedByLastName = "LastContactedByLastName",
            LastContactedByFirstName = "LastContactedByFirstName",
            LastContactedByTitle = "LastContactedByTitle",
            LastContactedByTitleOfCourtesy = "LastContactedByTitleOfCourtesy",
            LastContactedByBirthDate = "LastContactedByBirthDate",
            LastContactedByHireDate = "LastContactedByHireDate",
            LastContactedByAddress = "LastContactedByAddress",
            LastContactedByCity = "LastContactedByCity",
            LastContactedByRegion = "LastContactedByRegion",
            LastContactedByPostalCode = "LastContactedByPostalCode",
            LastContactedByCountry = "LastContactedByCountry",
            LastContactedByHomePhone = "LastContactedByHomePhone",
            LastContactedByExtension = "LastContactedByExtension",
            LastContactedByPhoto = "LastContactedByPhoto",
            LastContactedByNotes = "LastContactedByNotes",
            LastContactedByReportsTo = "LastContactedByReportsTo",
            LastContactedByPhotoPath = "LastContactedByPhotoPath"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CustomerGrossSalesRow {
        CustomerId?: string;
        ContactName?: string;
        ProductId?: number;
        ProductName?: string;
        GrossAmount?: number;
    }
    namespace CustomerGrossSalesRow {
        const nameProperty = "ContactName";
        const localTextPrefix = "Northwind.CustomerGrossSales";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            CustomerId = "CustomerId",
            ContactName = "ContactName",
            ProductId = "ProductId",
            ProductName = "ProductName",
            GrossAmount = "GrossAmount"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "Northwind.CustomerRepresentatives";
        const deletePermission = "Northwind:Customer:View";
        const insertPermission = "Northwind:Customer:View";
        const readPermission = "Northwind:Customer:View";
        const updatePermission = "Northwind:Customer:View";
        const enum Fields {
            RepresentativeId = "RepresentativeId",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
    }
    namespace CustomerRow {
        const idProperty = "ID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Customer";
        const lookupKey = "Northwind.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const deletePermission = "Northwind:Customer:Delete";
        const insertPermission = "Northwind:Customer:Modify";
        const readPermission = "Northwind:Customer:View";
        const updatePermission = "Northwind:Customer:Modify";
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            NoteList = "NoteList",
            Representatives = "Representatives",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace CustomerService {
        const baseUrl = "Northwind/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Customer/Create",
            Update = "Northwind/Customer/Update",
            Delete = "Northwind/Customer/Delete",
            GetNextNumber = "Northwind/Customer/GetNextNumber",
            Retrieve = "Northwind/Customer/Retrieve",
            List = "Northwind/Customer/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty = "EmployeeID";
        const nameProperty = "FullName";
        const localTextPrefix = "Northwind.Employee";
        const lookupKey = "Northwind.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            EmployeeID = "EmployeeID",
            LastName = "LastName",
            FirstName = "FirstName",
            FullName = "FullName",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension",
            Photo = "Photo",
            Notes = "Notes",
            ReportsTo = "ReportsTo",
            PhotoPath = "PhotoPath",
            ReportsToFullName = "ReportsToFullName",
            ReportsToLastName = "ReportsToLastName",
            ReportsToFirstName = "ReportsToFirstName",
            ReportsToTitle = "ReportsToTitle",
            ReportsToTitleOfCourtesy = "ReportsToTitleOfCourtesy",
            ReportsToBirthDate = "ReportsToBirthDate",
            ReportsToHireDate = "ReportsToHireDate",
            ReportsToAddress = "ReportsToAddress",
            ReportsToCity = "ReportsToCity",
            ReportsToRegion = "ReportsToRegion",
            ReportsToPostalCode = "ReportsToPostalCode",
            ReportsToCountry = "ReportsToCountry",
            ReportsToHomePhone = "ReportsToHomePhone",
            ReportsToExtension = "ReportsToExtension",
            ReportsToPhoto = "ReportsToPhoto",
            ReportsToNotes = "ReportsToNotes",
            ReportsToReportsTo = "ReportsToReportsTo",
            ReportsToPhotoPath = "ReportsToPhotoPath",
            Gender = "Gender"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty = "EmployeeID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.EmployeeTerritory";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            EmployeeID = "EmployeeID",
            TerritoryID = "TerritoryID",
            EmployeeLastName = "EmployeeLastName",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeTitle = "EmployeeTitle",
            EmployeeTitleOfCourtesy = "EmployeeTitleOfCourtesy",
            EmployeeBirthDate = "EmployeeBirthDate",
            EmployeeHireDate = "EmployeeHireDate",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCity = "EmployeeCity",
            EmployeeRegion = "EmployeeRegion",
            EmployeePostalCode = "EmployeePostalCode",
            EmployeeCountry = "EmployeeCountry",
            EmployeeHomePhone = "EmployeeHomePhone",
            EmployeeExtension = "EmployeeExtension",
            EmployeePhoto = "EmployeePhoto",
            EmployeeNotes = "EmployeeNotes",
            EmployeeReportsTo = "EmployeeReportsTo",
            EmployeePhotoPath = "EmployeePhotoPath",
            TerritoryTerritoryDescription = "TerritoryTerritoryDescription",
            TerritoryRegionID = "TerritoryRegionID"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    enum Gender {
        Male = 1,
        Female = 2
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Northwind.Note";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    class OrderColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class OrderDetailColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty = "DetailID";
        const localTextPrefix = "Northwind.OrderDetail";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            DetailID = "DetailID",
            OrderID = "OrderID",
            ProductID = "ProductID",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
            OrderCustomerID = "OrderCustomerID",
            OrderEmployeeID = "OrderEmployeeID",
            OrderDate = "OrderDate",
            OrderShippedDate = "OrderShippedDate",
            OrderShipVia = "OrderShipVia",
            OrderShipCity = "OrderShipCity",
            OrderShipCountry = "OrderShipCountry",
            ProductName = "ProductName",
            ProductDiscontinued = "ProductDiscontinued",
            ProductSupplierID = "ProductSupplierID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            LineTotal = "LineTotal"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace OrderDetailService {
        const baseUrl = "Northwind/OrderDetail";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Northwind/OrderDetail/Retrieve",
            List = "Northwind/OrderDetail/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface OrderListRequest extends Serenity.ListRequest {
        ProductID?: number;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty = "OrderID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.Order";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            OrderID = "OrderID",
            CustomerID = "CustomerID",
            EmployeeID = "EmployeeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            ShipVia = "ShipVia",
            Freight = "Freight",
            ShipName = "ShipName",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            ShipCountry = "ShipCountry",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            EmployeeFullName = "EmployeeFullName",
            EmployeeGender = "EmployeeGender",
            EmployeeReportsToFullName = "EmployeeReportsToFullName",
            ShipViaCompanyName = "ShipViaCompanyName",
            ShipViaPhone = "ShipViaPhone",
            ShippingState = "ShippingState",
            DetailList = "DetailList"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace OrderService {
        const baseUrl = "Northwind/Order";
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: OrderListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Order/Create",
            Update = "Northwind/Order/Update",
            Delete = "Northwind/Order/Delete",
            Retrieve = "Northwind/Order/Retrieve",
            List = "Northwind/Order/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
}
declare namespace MiMovieTutorial.Northwind {
}
declare namespace MiMovieTutorial.Northwind {
    class ProductColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.ProductLang";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            LanguageId = "LanguageId",
            ProductName = "ProductName"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace ProductLangService {
        const baseUrl = "Northwind/ProductLang";
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/ProductLang/Create",
            Update = "Northwind/ProductLang/Update",
            Delete = "Northwind/ProductLang/Delete",
            Retrieve = "Northwind/ProductLang/Retrieve",
            List = "Northwind/ProductLang/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty = "ProductLogID";
        const localTextPrefix = "Northwind.ProductLog";
        const deletePermission: any;
        const insertPermission: any;
        const readPermission = "";
        const updatePermission: any;
        const enum Fields {
            ProductLogID = "ProductLogID",
            OperationType = "OperationType",
            ChangingUserId = "ChangingUserId",
            ValidFrom = "ValidFrom",
            ValidUntil = "ValidUntil",
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty = "ProductID";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.Product";
        const lookupKey = "Northwind.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierCity = "SupplierCity",
            SupplierRegion = "SupplierRegion",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierCountry = "SupplierCountry",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierHomePage = "SupplierHomePage",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryPicture = "CategoryPicture"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace ProductService {
        const baseUrl = "Northwind/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Product/Create",
            Update = "Northwind/Product/Update",
            Delete = "Northwind/Product/Delete",
            Retrieve = "Northwind/Product/Retrieve",
            List = "Northwind/Product/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    class RegionColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty = "RegionID";
        const nameProperty = "RegionDescription";
        const localTextPrefix = "Northwind.Region";
        const lookupKey = "Northwind.Region";
        function getLookup(): Q.Lookup<RegionRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace RegionService {
        const baseUrl = "Northwind/Region";
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Region/Create",
            Update = "Northwind/Region/Update",
            Delete = "Northwind/Region/Delete",
            Retrieve = "Northwind/Region/Retrieve",
            List = "Northwind/Region/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    class SalesByCategoryColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.SalesByCategory";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            ProductName = "ProductName",
            ProductSales = "ProductSales"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace SalesByCategoryService {
        const baseUrl = "Northwind/SalesByCategory";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Northwind/SalesByCategory/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    class ShipperColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty = "ShipperID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Shipper";
        const lookupKey = "Northwind.Shipper";
        function getLookup(): Q.Lookup<ShipperRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ShipperID = "ShipperID",
            CompanyName = "CompanyName",
            Phone = "Phone"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace ShipperService {
        const baseUrl = "Northwind/Shipper";
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Shipper/Create",
            Update = "Northwind/Shipper/Update",
            Delete = "Northwind/Shipper/Delete",
            Retrieve = "Northwind/Shipper/Retrieve",
            List = "Northwind/Shipper/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    class SupplierColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty = "SupplierID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Supplier";
        const lookupKey = "Northwind.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            SupplierID = "SupplierID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            HomePage = "HomePage"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace SupplierService {
        const baseUrl = "Northwind/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Supplier/Create",
            Update = "Northwind/Supplier/Update",
            Delete = "Northwind/Supplier/Delete",
            Retrieve = "Northwind/Supplier/Retrieve",
            List = "Northwind/Supplier/List"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    class TerritoryColumns {
        static columnsKey: string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty = "ID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.Territory";
        const lookupKey = "Northwind.Territory";
        function getLookup(): Q.Lookup<TerritoryRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ID = "ID",
            TerritoryID = "TerritoryID",
            TerritoryDescription = "TerritoryDescription",
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace MiMovieTutorial.Northwind {
    namespace TerritoryService {
        const baseUrl = "Northwind/Territory";
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Territory/Create",
            Update = "Northwind/Territory/Update",
            Delete = "Northwind/Territory/Delete",
            Retrieve = "Northwind/Territory/Retrieve",
            List = "Northwind/Territory/List"
        }
    }
}
declare namespace MiMovieTutorial {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace MiMovieTutorial.Texts {
}
declare namespace MiMovieTutorial.Web.Modules.MovieDB.Movie {
    enum MovieKind {
        Film = 1,
        TvSeries = 2,
        MiniSeries = 3
    }
}
declare namespace MiMovieTutorial.Web.Modules.MovieDB.Movie {
    interface MovieListRequest extends Serenity.ListRequest {
        Genres?: number[];
    }
}
declare namespace MiMovieTutorial.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace MiMovieTutorial.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace MiMovieTutorial.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace MiMovieTutorial.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace MiMovieTutorial.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace MiMovieTutorial.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace MiMovieTutorial.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace MiMovieTutorial.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace MiMovieTutorial.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace MiMovieTutorial.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace MiMovieTutorial.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace MiMovieTutorial.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace MiMovieTutorial.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare var Morris: any;
declare namespace MiMovieTutorial.BasicSamples {
    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class CloneableEntityDialog extends Northwind.ProductDialog {
        protected updateInterface(): void;
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity(): Northwind.ProductRow;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter;
        private stringInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class CloneableEntityGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof CloneableEntityDialog;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Northwind {
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        set_shippingState(value: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called when New Item button is clicked.
         * By default, it calls EditItem with an empty entity.
         * This is a good place to fill in default values for New Item button.
         */
        protected addButtonClick(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace MiMovieTutorial.BasicSamples.DialogBoxes {
    function initializePage(): void;
}
declare namespace MiMovieTutorial.Northwind {
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    class EntityDialogAsPanel extends Northwind.OrderDialog {
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class GetInsertedRecordIdDialog extends Northwind.CategoryDialog {
        /**
         * This method is called after the save request to service
         * is completed succesfully. This can be an insert or update.
         *
         * @param response Response that is returned from server
         */
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
     */
    class GetInsertedRecordIdGrid extends Northwind.CategoryGrid {
        protected getDialogType(): typeof GetInsertedRecordIdDialog;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Styling for columns is done with CSS in site.basicsamples.less file.
     * When comparing this to MultiColumnDialog sample, you may notice that
     * this version requires much less JS and CSS code.
     */
    class MultiColumnResponsiveDialog extends Northwind.OrderDialog {
        constructor();
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
     */
    class MultiColumnResponsiveGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof MultiColumnResponsiveDialog;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     */
    class OtherFormInTabDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
     */
    class OtherFormInTabGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormInTabDialog;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     * With single toolbar for all forms
     */
    class OtherFormOneBarDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        private selfChange;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
        protected saveCustomer(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void): boolean;
        protected saveOrder(callback: (response: Serenity.SaveResponse) => void): void;
        protected saveAll(callback: (response: Serenity.SaveResponse) => void): void;
        protected save(callback: (response: Serenity.SaveResponse) => void): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
     */
    class OtherFormInTabOneBarGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormOneBarDialog;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class PopulateLinkedDataDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PopulateLinkedDataForm;
        constructor();
        private setCustomerDetails;
        /**
         * This dialog will have CSS class "s-PopulateLinkedDataDialog"
         * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
         * This has no effect other than looks on populate linked data demonstration
         */
        protected getCssClass(): string;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * A subclass of OrderGrid that launches PopulateLinkedDataDialog
     */
    class PopulateLinkedDataGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof PopulateLinkedDataDialog;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Northwind {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        protected getLanguages(): string[][];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class ReadOnlyDialog extends Northwind.SupplierDialog {
        /**
         * This is the method that gets list of tool
         * buttons to be created in a dialog.
         *
         * Here we'll remove save and close button, and
         * apply changes buttons.
         */
        protected getToolbarButtons(): Serenity.ToolButton[];
        /**
         * This method is a good place to update states of
         * interface elements. It is called after dialog
         * is initialized and an entity is loaded into dialog.
         * This is also called in new item mode.
         */
        protected updateInterface(): void;
        /**
         * This method is called when dialog title needs to be updated.
         * Base class returns something like 'Edit xyz' for edit mode,
         * and 'New xyz' for new record mode.
         *
         * But our dialog is readonly, so we should change it to 'View xyz'
         */
        protected getEntityTitle(): string;
        /**
         * This method is actually the one that calls getEntityTitle()
         * and updates the dialog title. We could do it here too...
         */
        protected updateTitle(): void;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * A readonly grid that launches ReadOnlyDialog
     */
    class ReadOnlyGrid extends Northwind.SupplierGrid {
        protected getDialogType(): typeof ReadOnlyDialog;
        constructor(container: JQuery);
        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Adding Responsive attribute makes this dialog use full screen in mobile devices.
     */
    class ResponsiveDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to ResponsiveDialog
     */
    class ResponsiveGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof ResponsiveDialog;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Northwind {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private ordersGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class SerialAutoNumberDialog extends Northwind.CustomerDialog {
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
     */
    class SerialAutoNumberGrid extends Northwind.CustomerGrid {
        protected getDialogType(): typeof SerialAutoNumberDialog;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class ChangingLookupTextDialog extends Common.GridEditorDialog<Northwind.OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ChangingLookupTextForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Our custom product editor type
     */
    class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.ProductRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: Northwind.ProductRow, lookup: Q.Lookup<Northwind.ProductRow>): string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        constructor();
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Our subclass of order detail dialog with a CategoryID property
     * that will be used to set CascadeValue of product editor
     */
    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
        constructor();
        /**
         * This method is called just before an entity is loaded to dialog
         * This is also called for new record mode with an empty entity
         */
        protected beforeLoadEntity(entity: any): void;
        categoryID: number;
    }
}
declare namespace MiMovieTutorial.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Our subclass of Order Details editor with a CategoryID property
     */
    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        protected getDialogType(): typeof FilteredLookupOrderDetailDialog;
        constructor(container: JQuery);
        categoryID: number;
        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Basic order dialog with a category selection
     */
    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private form;
        constructor();
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
     */
    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof FilteredLookupInDetailDialog;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * This is our custom product dialog that uses a different product form
     * (LookupFilterByMultipleForm) with our special category editor.
     */
    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
        protected getFormKey(): string;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof LookupFilterByMultipleDialog;
        constructor(container: JQuery);
        /**
         * This method is called just before List request is sent to service.
         * You have an opportunity here to cancel request or modify it.
         * Here we'll add a custom criteria to list request.
         */
        protected onViewSubmit(): boolean;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.CategoryRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Northwind.CategoryRow>): Northwind.CategoryRow[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class HardcodedValuesDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: HardcodedValuesForm;
        constructor();
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HardcodedValuesEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class StaticTextBlockDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: StaticTextBlockForm;
        constructor();
        /**
         * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
         * If this was an EntityDialog, your field value would be originating from server side entity.
         */
        protected loadInitialEntity(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace MiMovieTutorial.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class OrderBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class CustomLinksInGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * We override getColumns() to change format functions for some columns.
         * You could also write them as formatter classes, and use them at server side
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        /**
         * This method is called for columns with [EditLink] attribute,
         * but only for edit links of this grid's own item type.
         * It is also called by Add Product button with a NULL entityOrId
         * parameter so we should check that entityOrId is a string
         * to be sure it is originating from a link.
         *
         * As we changed format for other columns, this will only be called
         * for links in remaining OrderID column
         */
        protected editItem(entityOrId: any): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class DragDropSampleDialog extends Serenity.EntityDialog<DragDropSampleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DragDropSampleForm;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class DragDropSampleGrid extends Serenity.EntityGrid<DragDropSampleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DragDropSampleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private dragging;
        constructor(container: JQuery);
        /**
         * This method will determine if item can be moved under a given target
         * An item can't be moved under itself, under one of its children
         */
        private canMoveUnder;
        /**
         * Gets children list of an item
         */
        private getChildren;
        /**
         * Gets all parents of an item
         */
        private getParents;
        protected getButtons(): any[];
        protected usePager(): boolean;
    }
}
declare namespace MiMovieTutorial {
    class SelectableEntityGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class RowSelectionGrid extends SelectableEntityGrid<Northwind.SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class InitialValuesForQuickFilters extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        /**
         * This method is another possible place to modify quick filter widgets.
         * It is where the quick filter widgets are actually created.
         *
         * By default, it calls getQuickFilters() then renders UI for these
         * quick filters.
         *
         * We could use getQuickFilters() method for ShipVia too,
         * but this is for demonstration purposes
         */
        protected createQuickFilters(): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class InlineActionGrid extends Northwind.CustomerGrid {
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class InlineImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class InlineImageInGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class ProductExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class ProductExcelImportGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class QuickFilterCustomization extends Serenity.EntityGrid<Northwind.OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Northwind.OrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class RemovingAddButton extends Northwind.SupplierGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class CustomerGrossSalesGrid extends Serenity.EntityGrid<Northwind.CustomerGrossSalesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class TreeGrid extends Northwind.OrderGrid {
        private treeMixin;
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
    }
}
declare namespace MiMovieTutorial.BasicSamples {
    class WrappedHeadersGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.LanguageList {
    function getValue(): string[][];
}
declare namespace MiMovieTutorial.ScriptInitialization {
}
declare namespace MiMovieTutorial {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace MiMovieTutorial.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace MiMovieTutorial.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace MiMovieTutorial.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace MiMovieTutorial {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace MiMovieTutorial.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace MiMovieTutorial.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace MiMovieTutorial.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace MiMovieTutorial.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace MiMovieTutorial.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace MiMovieTutorial.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace MiMovieTutorial.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace MiMovieTutorial.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class AlumnosDialog extends Serenity.EntityDialog<AlumnosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AlumnosForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class AlumnosGrid extends Serenity.EntityGrid<AlumnosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AlumnosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
}
declare namespace MiMovieTutorial.INSUDE {
    class AlumnosCarrerasDialog extends Serenity.EntityDialog<AlumnosCarrerasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AlumnosCarrerasForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class AlumnosCarrerasGrid extends Serenity.EntityGrid<AlumnosCarrerasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AlumnosCarrerasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class AlumnosFamiliaresDialog extends Serenity.EntityDialog<AlumnosFamiliaresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AlumnosFamiliaresForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class AlumnosFamiliaresGrid extends Serenity.EntityGrid<AlumnosFamiliaresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AlumnosFamiliaresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class CompaniaDialog extends Serenity.EntityDialog<CompaniaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CompaniaForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class CompaniaGrid extends Serenity.EntityGrid<CompaniaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompaniaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class DependenciasDialog extends Serenity.EntityDialog<DependenciasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DependenciasForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class DependenciasGrid extends Serenity.EntityGrid<DependenciasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DependenciasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class EscuelasDialog extends Serenity.EntityDialog<EscuelasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EscuelasForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class EscuelasGrid extends Serenity.EntityGrid<EscuelasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EscuelasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class EstadocivilDialog extends Serenity.EntityDialog<EstadocivilRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EstadocivilForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class EstadocivilGrid extends Serenity.EntityGrid<EstadocivilRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EstadocivilDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class ExistenciAlmaEditor extends Common.GridEditorBase<ExistencialmaRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExistencialmaEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class ExistencialmaDialog extends Serenity.EntityDialog<ExistencialmaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ExistencialmaForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class ExistencialmaEditDialog extends Common.GridEditorDialog<ExistencialmaRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ExistencialmaForm;
        constructor();
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class ExistencialmaGrid extends Serenity.EntityGrid<ExistencialmaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExistencialmaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class FacultadesDialog extends Serenity.EntityDialog<FacultadesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FacultadesForm;
    }
}
/*******************************
 * Agrego Exportacion excel y PDF
 * ****************************/
declare namespace MiMovieTutorial.INSUDE {
    class FacultadesGrid extends Serenity.EntityGrid<FacultadesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FacultadesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class IndicesDialog extends Serenity.EntityDialog<IndicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: IndicesForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class IndicesGrid extends Serenity.EntityGrid<IndicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof IndicesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class InstructoresDialog extends Serenity.EntityDialog<InstructoresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InstructoresForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class InstructoresGrid extends Serenity.EntityGrid<InstructoresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InstructoresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class MalmacenDialog extends Serenity.EntityDialog<MalmacenRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MalmacenForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class MalmacenGrid extends Serenity.EntityGrid<MalmacenRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MalmacenDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class MateriasDialog extends Serenity.EntityDialog<MateriasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MateriasForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class MateriasGrid extends Serenity.EntityGrid<MateriasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MateriasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class MproductDialog extends Serenity.EntityDialog<MproductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MproductForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class MproductGrid extends Serenity.EntityGrid<MproductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MproductDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class NacionalidadDialog extends Serenity.EntityDialog<NacionalidadRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: NacionalidadForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class NacionalidadGrid extends Serenity.EntityGrid<NacionalidadRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NacionalidadDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class NivelesPorCarreraDialog extends Serenity.EntityDialog<NivelesPorCarreraRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: NivelesPorCarreraForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class NivelesPorCarreraGrid extends Serenity.EntityGrid<NivelesPorCarreraRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NivelesPorCarreraDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PaisDialog extends Serenity.EntityDialog<PaisRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PaisForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PaisGrid extends Serenity.EntityGrid<PaisRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaisDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PensumDialog extends Serenity.EntityDialog<PensumRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PensumForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PensumGrid extends Serenity.EntityGrid<PensumRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PensumDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PrivilegiosDialog extends Serenity.EntityDialog<PrivilegiosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PrivilegiosForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PrivilegiosGrid extends Serenity.EntityGrid<PrivilegiosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PrivilegiosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PromocionesDialog extends Serenity.EntityDialog<PromocionesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PromocionesForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class PromocionesGrid extends Serenity.EntityGrid<PromocionesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PromocionesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class RangosDialog extends Serenity.EntityDialog<RangosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RangosForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class RangosGrid extends Serenity.EntityGrid<RangosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RangosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class RequisitosDialog extends Serenity.EntityDialog<RequisitosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RequisitosForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class RequisitosGrid extends Serenity.EntityGrid<RequisitosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RequisitosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class ServiciosEstudiantilesDialog extends Serenity.EntityDialog<ServiciosEstudiantilesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ServiciosEstudiantilesForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class ServiciosEstudiantilesGrid extends Serenity.EntityGrid<ServiciosEstudiantilesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServiciosEstudiantilesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class SexoDialog extends Serenity.EntityDialog<SexoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SexoForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class SexoGrid extends Serenity.EntityGrid<SexoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SexoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class StatusDialog extends Serenity.EntityDialog<StatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StatusForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class StatusGrid extends Serenity.EntityGrid<StatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class TipoDeCalificacionDialog extends Serenity.EntityDialog<TipoDeCalificacionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TipoDeCalificacionForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class TipoDeCalificacionGrid extends Serenity.EntityGrid<TipoDeCalificacionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TipoDeCalificacionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class TitulosDialog extends Serenity.EntityDialog<TitulosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TitulosForm;
    }
}
declare namespace MiMovieTutorial.INSUDE {
    class TitulosGrid extends Serenity.EntityGrid<TitulosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TitulosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace MiMovieTutorial.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class GenreDialog extends Serenity.EntityDialog<GenreRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GenreForm;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class GenreGrid extends Serenity.EntityGrid<GenreRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GenreDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MovieTutorial.MovieDB {
    class GenreListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class MovieDialog extends Serenity.EntityDialog<MovieRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MovieForm;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class MovieGrid extends Serenity.EntityGrid<MovieRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MovieDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class MovieCastDialog extends Serenity.EntityDialog<MovieCastRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MovieCastForm;
    }
}
/*********************************************
 * dialogo para Editar MasterDetail MovieCast
 * *******************************************/
declare namespace MiMovieTutorial.MovieDB.Entities {
    class MovieCastEditDialog extends Common.GridEditorDialog<MovieCastRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: MovieCastForm;
        constructor();
    }
}
declare namespace MiMovieTutorial.MovieDB.Entities {
    class MovieCastEditor extends Common.GridEditorBase<MovieCastRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MovieCastEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: MovieCastRow, id: number): boolean;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class MovieCastGrid extends Serenity.EntityGrid<MovieCastRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MovieCastDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class PersonDialog extends Serenity.EntityDialog<PersonRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PersonForm;
        private moviesGrid;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class PersonGrid extends Serenity.EntityGrid<PersonRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PersonDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.MovieDB {
    class PersonMovieGrid extends Serenity.EntityGrid<MovieCastRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private _personID;
        constructor(container: JQuery);
        protected getButtons(): any;
        protected getInitialTitle(): any;
        protected usePager(): boolean;
        protected getGridCanLoad(): boolean;
        get personID(): number;
        set personID(value: number);
    }
}
declare namespace MiMovieTutorial.Northwind {
    class CustomerEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CustomerRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class CustomerOrderDialog extends OrderDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        get customerID(): string;
        set customerID(value: string);
    }
}
declare namespace MiMovieTutorial.Northwind {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        get text(): string;
        set text(value: string);
        okClick: () => void;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        get value(): NoteRow[];
        set value(value: NoteRow[]);
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
        protected getLanguages(): string[][];
    }
}
declare namespace MiMovieTutorial.Northwind {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Northwind {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
        protected getLanguages(): string[][];
    }
}
declare namespace MiMovieTutorial.Northwind {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace MiMovieTutorial.Northwind {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MiMovieTutorial.Northwind {
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerritoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace MiMovieTutorial.Northwind {
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
