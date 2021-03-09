
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class MateriasDialog extends Serenity.EntityDialog<MateriasRow, any> {
        protected getFormKey() { return MateriasForm.formKey; }
        protected getIdProperty() { return MateriasRow.idProperty; }
        protected getLocalTextPrefix() { return MateriasRow.localTextPrefix; }
        protected getNameProperty() { return MateriasRow.nameProperty; }
        protected getService() { return MateriasService.baseUrl; }
        protected getDeletePermission() { return MateriasRow.deletePermission; }
        protected getInsertPermission() { return MateriasRow.insertPermission; }
        protected getUpdatePermission() { return MateriasRow.updatePermission; }

        protected form = new MateriasForm(this.idPrefix);

    }
}