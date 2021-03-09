
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class PensumDialog extends Serenity.EntityDialog<PensumRow, any> {
        protected getFormKey() { return PensumForm.formKey; }
        protected getIdProperty() { return PensumRow.idProperty; }
        protected getLocalTextPrefix() { return PensumRow.localTextPrefix; }
        protected getNameProperty() { return PensumRow.nameProperty; }
        protected getService() { return PensumService.baseUrl; }
        protected getDeletePermission() { return PensumRow.deletePermission; }
        protected getInsertPermission() { return PensumRow.insertPermission; }
        protected getUpdatePermission() { return PensumRow.updatePermission; }

        protected form = new PensumForm(this.idPrefix);

    }
}