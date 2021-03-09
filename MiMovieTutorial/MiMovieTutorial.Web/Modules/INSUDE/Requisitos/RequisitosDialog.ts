
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class RequisitosDialog extends Serenity.EntityDialog<RequisitosRow, any> {
        protected getFormKey() { return RequisitosForm.formKey; }
        protected getIdProperty() { return RequisitosRow.idProperty; }
        protected getLocalTextPrefix() { return RequisitosRow.localTextPrefix; }
        protected getNameProperty() { return RequisitosRow.nameProperty; }
        protected getService() { return RequisitosService.baseUrl; }
        protected getDeletePermission() { return RequisitosRow.deletePermission; }
        protected getInsertPermission() { return RequisitosRow.insertPermission; }
        protected getUpdatePermission() { return RequisitosRow.updatePermission; }

        protected form = new RequisitosForm(this.idPrefix);

    }
}