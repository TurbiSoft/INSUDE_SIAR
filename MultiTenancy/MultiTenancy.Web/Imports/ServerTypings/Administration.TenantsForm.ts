namespace MultiTenancy.Administration {
    export interface TenantsForm {
        TenantName: Serenity.StringEditor;
    }

    export class TenantsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Tenants';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TenantsForm.init)  {
                TenantsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TenantsForm, [
                    'TenantName', w0
                ]);
            }
        }
    }
}
