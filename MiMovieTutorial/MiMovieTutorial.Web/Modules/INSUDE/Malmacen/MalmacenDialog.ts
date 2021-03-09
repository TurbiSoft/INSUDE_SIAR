
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class MalmacenDialog extends Serenity.EntityDialog<MalmacenRow, any> {
        protected getFormKey() { return MalmacenForm.formKey; }
        protected getIdProperty() { return MalmacenRow.idProperty; }
        protected getLocalTextPrefix() { return MalmacenRow.localTextPrefix; }
        protected getNameProperty() { return MalmacenRow.nameProperty; }
        protected getService() { return MalmacenService.baseUrl; }
        protected getDeletePermission() { return MalmacenRow.deletePermission; }
        protected getInsertPermission() { return MalmacenRow.insertPermission; }
        protected getUpdatePermission() { return MalmacenRow.updatePermission; }

        protected form = new MalmacenForm(this.idPrefix);

    }
}