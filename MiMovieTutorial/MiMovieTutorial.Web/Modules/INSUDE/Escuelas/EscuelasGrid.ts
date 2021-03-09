
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class EscuelasGrid extends Serenity.EntityGrid<EscuelasRow, any> {
        protected getColumnsKey() { return 'INSUDE.Escuelas'; }
        protected getDialogType() { return EscuelasDialog; }
        protected getIdProperty() { return EscuelasRow.idProperty; }
        protected getInsertPermission() { return EscuelasRow.insertPermission; }
        protected getLocalTextPrefix() { return EscuelasRow.localTextPrefix; }
        protected getService() { return EscuelasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        // Agreg esto para Botones de Exportacion en Grid.ts
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Insude/Escuelas/ListExcel',
                separator: true
            }));

            buttons.push(MiMovieTutorial.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }

        
    }
}