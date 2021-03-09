
namespace MultiTenancy.Administration {

    @Serenity.Decorators.registerClass()
    export class TenantsDialog extends Serenity.EntityDialog<TenantsRow, any> {
        protected getFormKey() { return TenantsForm.formKey; }
        protected getIdProperty() { return TenantsRow.idProperty; }
        protected getLocalTextPrefix() { return TenantsRow.localTextPrefix; }
        protected getNameProperty() { return TenantsRow.nameProperty; }
        protected getService() { return TenantsService.baseUrl; }
        protected getDeletePermission() { return TenantsRow.deletePermission; }
        protected getInsertPermission() { return TenantsRow.insertPermission; }
        protected getUpdatePermission() { return TenantsRow.updatePermission; }

        protected form = new TenantsForm(this.idPrefix);

    }
}