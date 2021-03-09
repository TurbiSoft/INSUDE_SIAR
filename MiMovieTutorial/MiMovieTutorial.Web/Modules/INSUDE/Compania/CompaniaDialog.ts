
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class CompaniaDialog extends Serenity.EntityDialog<CompaniaRow, any> {
        protected getFormKey() { return CompaniaForm.formKey; }
        protected getIdProperty() { return CompaniaRow.idProperty; }
        protected getLocalTextPrefix() { return CompaniaRow.localTextPrefix; }
        protected getNameProperty() { return CompaniaRow.nameProperty; }
        protected getService() { return CompaniaService.baseUrl; }
        protected getDeletePermission() { return CompaniaRow.deletePermission; }
        protected getInsertPermission() { return CompaniaRow.insertPermission; }
        protected getUpdatePermission() { return CompaniaRow.updatePermission; }

        protected form = new CompaniaForm(this.idPrefix);

    }
}