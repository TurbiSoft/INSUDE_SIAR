
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class EscuelasDialog extends Serenity.EntityDialog<EscuelasRow, any> {
        protected getFormKey() { return EscuelasForm.formKey; }
        protected getIdProperty() { return EscuelasRow.idProperty; }
        protected getLocalTextPrefix() { return EscuelasRow.localTextPrefix; }
        protected getNameProperty() { return EscuelasRow.nameProperty; }
        protected getService() { return EscuelasService.baseUrl; }
        protected getDeletePermission() { return EscuelasRow.deletePermission; }
        protected getInsertPermission() { return EscuelasRow.insertPermission; }
        protected getUpdatePermission() { return EscuelasRow.updatePermission; }

        protected form = new EscuelasForm(this.idPrefix);

    }
}