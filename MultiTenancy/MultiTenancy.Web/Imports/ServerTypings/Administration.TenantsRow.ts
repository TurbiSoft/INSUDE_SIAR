namespace MultiTenancy.Administration {
    export interface TenantsRow {
        TenantId?: number;
        TenantName?: string;
    }

    export namespace TenantsRow {
        export const idProperty = 'TenantId';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Administration.Tenants';
        export const lookupKey = 'Administration.Tenant';

        export function getLookup(): Q.Lookup<TenantsRow> {
            return Q.getLookup<TenantsRow>('Administration.Tenant');
        }
        export const deletePermission = 'PermissionKeys:Tenants';
        export const insertPermission = 'PermissionKeys:Tenants';
        export const readPermission = 'PermissionKeys:Tenants';
        export const updatePermission = 'PermissionKeys:Tenants';

        export declare const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName"
        }
    }
}
