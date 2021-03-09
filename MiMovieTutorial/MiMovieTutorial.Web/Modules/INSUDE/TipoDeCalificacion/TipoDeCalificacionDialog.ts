
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class TipoDeCalificacionDialog extends Serenity.EntityDialog<TipoDeCalificacionRow, any> {
        protected getFormKey() { return TipoDeCalificacionForm.formKey; }
        protected getIdProperty() { return TipoDeCalificacionRow.idProperty; }
        protected getLocalTextPrefix() { return TipoDeCalificacionRow.localTextPrefix; }
        protected getNameProperty() { return TipoDeCalificacionRow.nameProperty; }
        protected getService() { return TipoDeCalificacionService.baseUrl; }
        protected getDeletePermission() { return TipoDeCalificacionRow.deletePermission; }
        protected getInsertPermission() { return TipoDeCalificacionRow.insertPermission; }
        protected getUpdatePermission() { return TipoDeCalificacionRow.updatePermission; }

        protected form = new TipoDeCalificacionForm(this.idPrefix);

    }
}