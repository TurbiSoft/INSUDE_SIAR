
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class FacultadesDialog extends Serenity.EntityDialog<FacultadesRow, any> {
        protected getFormKey() { return FacultadesForm.formKey; }
        protected getIdProperty() { return FacultadesRow.idProperty; }
        protected getLocalTextPrefix() { return FacultadesRow.localTextPrefix; }
        protected getNameProperty() { return FacultadesRow.nameProperty; }
        protected getService() { return FacultadesService.baseUrl; }
        protected getDeletePermission() { return FacultadesRow.deletePermission; }
        protected getInsertPermission() { return FacultadesRow.insertPermission; }
        protected getUpdatePermission() { return FacultadesRow.updatePermission; }

        protected form = new FacultadesForm(this.idPrefix);

    }
}