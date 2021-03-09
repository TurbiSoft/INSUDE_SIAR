
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class NivelesPorCarreraDialog extends Serenity.EntityDialog<NivelesPorCarreraRow, any> {
        protected getFormKey() { return NivelesPorCarreraForm.formKey; }
        protected getIdProperty() { return NivelesPorCarreraRow.idProperty; }
        protected getLocalTextPrefix() { return NivelesPorCarreraRow.localTextPrefix; }
        protected getNameProperty() { return NivelesPorCarreraRow.nameProperty; }
        protected getService() { return NivelesPorCarreraService.baseUrl; }
        protected getDeletePermission() { return NivelesPorCarreraRow.deletePermission; }
        protected getInsertPermission() { return NivelesPorCarreraRow.insertPermission; }
        protected getUpdatePermission() { return NivelesPorCarreraRow.updatePermission; }

        protected form = new NivelesPorCarreraForm(this.idPrefix);

    }
}