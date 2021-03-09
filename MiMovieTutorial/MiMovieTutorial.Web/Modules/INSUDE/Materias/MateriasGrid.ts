
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class MateriasGrid extends Serenity.EntityGrid<MateriasRow, any> {
        protected getColumnsKey() { return 'INSUDE.Materias'; }
        protected getDialogType() { return MateriasDialog; }
        protected getIdProperty() { return MateriasRow.idProperty; }
        protected getInsertPermission() { return MateriasRow.insertPermission; }
        protected getLocalTextPrefix() { return MateriasRow.localTextPrefix; }
        protected getService() { return MateriasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}