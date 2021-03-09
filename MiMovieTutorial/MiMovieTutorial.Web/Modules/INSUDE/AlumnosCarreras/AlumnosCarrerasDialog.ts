
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class AlumnosCarrerasDialog extends Serenity.EntityDialog<AlumnosCarrerasRow, any> {
        protected getFormKey() { return AlumnosCarrerasForm.formKey; }
        protected getIdProperty() { return AlumnosCarrerasRow.idProperty; }
        protected getLocalTextPrefix() { return AlumnosCarrerasRow.localTextPrefix; }
        protected getNameProperty() { return AlumnosCarrerasRow.nameProperty; }
        protected getService() { return AlumnosCarrerasService.baseUrl; }
        protected getDeletePermission() { return AlumnosCarrerasRow.deletePermission; }
        protected getInsertPermission() { return AlumnosCarrerasRow.insertPermission; }
        protected getUpdatePermission() { return AlumnosCarrerasRow.updatePermission; }

        protected form = new AlumnosCarrerasForm(this.idPrefix);

    }
}