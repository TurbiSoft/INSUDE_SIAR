
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class TitulosDialog extends Serenity.EntityDialog<TitulosRow, any> {
        protected getFormKey() { return TitulosForm.formKey; }
        protected getIdProperty() { return TitulosRow.idProperty; }
        protected getLocalTextPrefix() { return TitulosRow.localTextPrefix; }
        protected getNameProperty() { return TitulosRow.nameProperty; }
        protected getService() { return TitulosService.baseUrl; }
        protected getDeletePermission() { return TitulosRow.deletePermission; }
        protected getInsertPermission() { return TitulosRow.insertPermission; }
        protected getUpdatePermission() { return TitulosRow.updatePermission; }

        protected form = new TitulosForm(this.idPrefix);

    }
}