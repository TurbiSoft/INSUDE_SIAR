
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class AlumnosFamiliaresDialog extends Serenity.EntityDialog<AlumnosFamiliaresRow, any> {
        protected getFormKey() { return AlumnosFamiliaresForm.formKey; }
        protected getIdProperty() { return AlumnosFamiliaresRow.idProperty; }
        protected getLocalTextPrefix() { return AlumnosFamiliaresRow.localTextPrefix; }
        protected getNameProperty() { return AlumnosFamiliaresRow.nameProperty; }
        protected getService() { return AlumnosFamiliaresService.baseUrl; }
        protected getDeletePermission() { return AlumnosFamiliaresRow.deletePermission; }
        protected getInsertPermission() { return AlumnosFamiliaresRow.insertPermission; }
        protected getUpdatePermission() { return AlumnosFamiliaresRow.updatePermission; }

        protected form = new AlumnosFamiliaresForm(this.idPrefix);

    }
}