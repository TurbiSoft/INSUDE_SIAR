
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class EstadocivilDialog extends Serenity.EntityDialog<EstadocivilRow, any> {
        protected getFormKey() { return EstadocivilForm.formKey; }
        protected getIdProperty() { return EstadocivilRow.idProperty; }
        protected getLocalTextPrefix() { return EstadocivilRow.localTextPrefix; }
        protected getNameProperty() { return EstadocivilRow.nameProperty; }
        protected getService() { return EstadocivilService.baseUrl; }
        protected getDeletePermission() { return EstadocivilRow.deletePermission; }
        protected getInsertPermission() { return EstadocivilRow.insertPermission; }
        protected getUpdatePermission() { return EstadocivilRow.updatePermission; }

        protected form = new EstadocivilForm(this.idPrefix);

    }
}