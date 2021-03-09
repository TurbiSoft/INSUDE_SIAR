
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class ServiciosEstudiantilesDialog extends Serenity.EntityDialog<ServiciosEstudiantilesRow, any> {
        protected getFormKey() { return ServiciosEstudiantilesForm.formKey; }
        protected getIdProperty() { return ServiciosEstudiantilesRow.idProperty; }
        protected getLocalTextPrefix() { return ServiciosEstudiantilesRow.localTextPrefix; }
        protected getNameProperty() { return ServiciosEstudiantilesRow.nameProperty; }
        protected getService() { return ServiciosEstudiantilesService.baseUrl; }
        protected getDeletePermission() { return ServiciosEstudiantilesRow.deletePermission; }
        protected getInsertPermission() { return ServiciosEstudiantilesRow.insertPermission; }
        protected getUpdatePermission() { return ServiciosEstudiantilesRow.updatePermission; }

        protected form = new ServiciosEstudiantilesForm(this.idPrefix);

    }
}