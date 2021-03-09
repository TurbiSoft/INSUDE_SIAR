
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class RangosGrid extends Serenity.EntityGrid<RangosRow, any> {
        protected getColumnsKey() { return 'INSUDE.Rangos'; }
        protected getDialogType() { return RangosDialog; }
        protected getIdProperty() { return RangosRow.idProperty; }
        protected getInsertPermission() { return RangosRow.insertPermission; }
        protected getLocalTextPrefix() { return RangosRow.localTextPrefix; }
        protected getService() { return RangosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        // Agreg esto para Botones de Exportacion
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Insude/Rangos/ListExcel',
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