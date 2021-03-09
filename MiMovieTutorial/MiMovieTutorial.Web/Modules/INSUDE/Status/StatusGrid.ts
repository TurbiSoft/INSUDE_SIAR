﻿
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class StatusGrid extends Serenity.EntityGrid<StatusRow, any> {
        protected getColumnsKey() { return 'INSUDE.Status'; }
        protected getDialogType() { return StatusDialog; }
        protected getIdProperty() { return StatusRow.idProperty; }
        protected getInsertPermission() { return StatusRow.insertPermission; }
        protected getLocalTextPrefix() { return StatusRow.localTextPrefix; }
        protected getService() { return StatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}