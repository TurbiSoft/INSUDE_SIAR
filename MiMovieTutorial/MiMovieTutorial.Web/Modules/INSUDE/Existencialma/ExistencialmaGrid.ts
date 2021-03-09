
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class ExistencialmaGrid extends Serenity.EntityGrid<ExistencialmaRow, any> {
        protected getColumnsKey() { return 'INSUDE.Existencialma'; }
        protected getDialogType() { return ExistencialmaDialog; }
        protected getIdProperty() { return ExistencialmaRow.idProperty; }
        protected getInsertPermission() { return ExistencialmaRow.insertPermission; }
        protected getLocalTextPrefix() { return ExistencialmaRow.localTextPrefix; }
        protected getService() { return ExistencialmaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}