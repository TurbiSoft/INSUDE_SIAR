
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class PaisDialog extends Serenity.EntityDialog<PaisRow, any> {
        protected getFormKey() { return PaisForm.formKey; }
        protected getIdProperty() { return PaisRow.idProperty; }
        protected getLocalTextPrefix() { return PaisRow.localTextPrefix; }
        protected getNameProperty() { return PaisRow.nameProperty; }
        protected getService() { return PaisService.baseUrl; }
        protected getDeletePermission() { return PaisRow.deletePermission; }
        protected getInsertPermission() { return PaisRow.insertPermission; }
        protected getUpdatePermission() { return PaisRow.updatePermission; }

        protected form = new PaisForm(this.idPrefix);

    }
}