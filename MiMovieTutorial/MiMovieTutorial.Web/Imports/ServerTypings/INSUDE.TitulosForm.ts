namespace MiMovieTutorial.INSUDE {
    export interface TitulosForm {
        Codigo: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        Mencion: Serenity.StringEditor;
        IdEscuela: Serenity.IntegerEditor;
        IdPensum: Serenity.IntegerEditor;
        MontoInscripcion: Serenity.DecimalEditor;
        Costo: Serenity.DecimalEditor;
        CostoCredito: Serenity.BooleanEditor;
        TituloOtorgado: Serenity.StringEditor;
        IdRequisitoNacional: Serenity.IntegerEditor;
        IdRequisitoExtrangero: Serenity.IntegerEditor;
        TipoMatricula: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
        CicloAcademico: Serenity.StringEditor;
    }

    export class TitulosForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Titulos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TitulosForm.init)  {
                TitulosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateEditor;

                Q.initFormType(TitulosForm, [
                    'Codigo', w0,
                    'Nombre', w0,
                    'Mencion', w0,
                    'IdEscuela', w1,
                    'IdPensum', w1,
                    'MontoInscripcion', w2,
                    'Costo', w2,
                    'CostoCredito', w3,
                    'TituloOtorgado', w0,
                    'IdRequisitoNacional', w1,
                    'IdRequisitoExtrangero', w1,
                    'TipoMatricula', w0,
                    'Estado', w0,
                    'CreateDate', w4,
                    'CreateUser', w0,
                    'CicloAcademico', w0
                ]);
            }
        }
    }
}
