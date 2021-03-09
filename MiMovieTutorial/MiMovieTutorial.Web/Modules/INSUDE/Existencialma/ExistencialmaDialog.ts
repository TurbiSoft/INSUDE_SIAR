
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class ExistencialmaDialog extends Serenity.EntityDialog<ExistencialmaRow, any> {
        protected getFormKey() { return ExistencialmaForm.formKey; }
        protected getIdProperty() { return ExistencialmaRow.idProperty; }
        protected getLocalTextPrefix() { return ExistencialmaRow.localTextPrefix; }
        protected getService() { return ExistencialmaService.baseUrl; }
        protected getDeletePermission() { return ExistencialmaRow.deletePermission; }
        protected getInsertPermission() { return ExistencialmaRow.insertPermission; }
        protected getUpdatePermission() { return ExistencialmaRow.updatePermission; }

        protected form = new ExistencialmaForm(this.idPrefix);

    }
}