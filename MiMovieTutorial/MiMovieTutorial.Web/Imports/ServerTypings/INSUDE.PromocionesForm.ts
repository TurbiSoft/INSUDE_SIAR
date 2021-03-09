namespace MiMovieTutorial.INSUDE {
    export interface PromocionesForm {
        IdTitulo: Serenity.IntegerEditor;
        Descripcion: Serenity.StringEditor;
        YearInicio: Serenity.IntegerEditor;
        YearFin: Serenity.IntegerEditor;
        Estado: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
    }

    export class PromocionesForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Promociones';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PromocionesForm.init)  {
                PromocionesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(PromocionesForm, [
                    'IdTitulo', w0,
                    'Descripcion', w1,
                    'YearInicio', w0,
                    'YearFin', w0,
                    'Estado', w1,
                    'CreateDate', w2,
                    'LastUpdatedAt', w2
                ]);
            }
        }
    }
}
