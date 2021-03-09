
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class AlumnosDialog extends Serenity.EntityDialog<AlumnosRow, any> {
        protected getFormKey() { return AlumnosForm.formKey; }
        protected getIdProperty() { return AlumnosRow.idProperty; }
        protected getLocalTextPrefix() { return AlumnosRow.localTextPrefix; }
        protected getNameProperty() { return AlumnosRow.nameProperty; }
        protected getService() { return AlumnosService.baseUrl; }
        protected getDeletePermission() { return AlumnosRow.deletePermission; }
        protected getInsertPermission() { return AlumnosRow.insertPermission; }
        protected getUpdatePermission() { return AlumnosRow.updatePermission; }

        protected form = new AlumnosForm(this.idPrefix);

    }
}