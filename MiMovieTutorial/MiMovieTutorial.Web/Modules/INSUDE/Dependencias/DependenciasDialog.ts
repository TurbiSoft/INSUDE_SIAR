
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class DependenciasDialog extends Serenity.EntityDialog<DependenciasRow, any> {
        protected getFormKey() { return DependenciasForm.formKey; }
        protected getIdProperty() { return DependenciasRow.idProperty; }
        protected getLocalTextPrefix() { return DependenciasRow.localTextPrefix; }
        protected getNameProperty() { return DependenciasRow.nameProperty; }
        protected getService() { return DependenciasService.baseUrl; }
        protected getDeletePermission() { return DependenciasRow.deletePermission; }
        protected getInsertPermission() { return DependenciasRow.insertPermission; }
        protected getUpdatePermission() { return DependenciasRow.updatePermission; }

        protected form = new DependenciasForm(this.idPrefix);

    }
}