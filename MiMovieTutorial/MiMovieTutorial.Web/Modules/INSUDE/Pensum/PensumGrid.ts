
namespace MiMovieTutorial.INSUDE {

    @Serenity.Decorators.registerClass()
    export class PensumGrid extends Serenity.EntityGrid<PensumRow, any> {
        protected getColumnsKey() { return 'INSUDE.Pensum'; }
        protected getDialogType() { return PensumDialog; }
        protected getIdProperty() { return PensumRow.idProperty; }
        protected getInsertPermission() { return PensumRow.insertPermission; }
        protected getLocalTextPrefix() { return PensumRow.localTextPrefix; }
        protected getService() { return PensumService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Insude/Pensum/ListExcel',
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