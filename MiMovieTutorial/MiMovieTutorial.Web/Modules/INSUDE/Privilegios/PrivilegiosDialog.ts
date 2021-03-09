
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class PrivilegiosDialog extends Serenity.EntityDialog<PrivilegiosRow, any> {
        protected getFormKey() { return PrivilegiosForm.formKey; }
        protected getIdProperty() { return PrivilegiosRow.idProperty; }
        protected getLocalTextPrefix() { return PrivilegiosRow.localTextPrefix; }
        protected getNameProperty() { return PrivilegiosRow.nameProperty; }
        protected getService() { return PrivilegiosService.baseUrl; }
        protected getDeletePermission() { return PrivilegiosRow.deletePermission; }
        protected getInsertPermission() { return PrivilegiosRow.insertPermission; }
        protected getUpdatePermission() { return PrivilegiosRow.updatePermission; }

        protected form = new PrivilegiosForm(this.idPrefix);

    }
}