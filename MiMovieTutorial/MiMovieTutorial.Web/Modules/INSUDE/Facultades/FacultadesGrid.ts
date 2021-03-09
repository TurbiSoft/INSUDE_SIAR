/*******************************
 * Agrego Exportacion excel y PDF
 * ****************************/
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class FacultadesGrid extends Serenity.EntityGrid<FacultadesRow, any> {
        protected getColumnsKey() { return 'INSUDE.Facultades'; }
        protected getDialogType() { return FacultadesDialog; }
        protected getIdProperty() { return FacultadesRow.idProperty; }
        protected getInsertPermission() { return FacultadesRow.insertPermission; }
        protected getLocalTextPrefix() { return FacultadesRow.localTextPrefix; }
        protected getService() { return FacultadesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        // Agreg esto para Botones de Exportacion
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Insude/Facultades/ListExcel',
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