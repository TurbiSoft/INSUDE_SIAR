﻿
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class SexoGrid extends Serenity.EntityGrid<SexoRow, any> {
        protected getColumnsKey() { return 'INSUDE.Sexo'; }
        protected getDialogType() { return SexoDialog; }
        protected getIdProperty() { return SexoRow.idProperty; }
        protected getInsertPermission() { return SexoRow.insertPermission; }
        protected getLocalTextPrefix() { return SexoRow.localTextPrefix; }
        protected getService() { return SexoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}