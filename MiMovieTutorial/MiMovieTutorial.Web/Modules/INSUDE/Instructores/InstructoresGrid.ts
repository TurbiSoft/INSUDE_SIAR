
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class InstructoresGrid extends Serenity.EntityGrid<InstructoresRow, any> {
        protected getColumnsKey() { return 'INSUDE.Instructores'; }
        protected getDialogType() { return InstructoresDialog; }
        protected getIdProperty() { return InstructoresRow.idProperty; }
        protected getInsertPermission() { return InstructoresRow.insertPermission; }
        protected getLocalTextPrefix() { return InstructoresRow.localTextPrefix; }
        protected getService() { return InstructoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}