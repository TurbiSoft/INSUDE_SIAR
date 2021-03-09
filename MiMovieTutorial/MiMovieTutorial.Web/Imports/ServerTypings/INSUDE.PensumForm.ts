namespace MiMovieTutorial.INSUDE {
    export interface PensumForm {
        IdTitulo: Serenity.IntegerEditor;
        Codigo: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        IdStatus: Serenity.LookupEditor;
    }

    export class PensumForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Pensum';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PensumForm.init)  {
                PensumForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(PensumForm, [
                    'IdTitulo', w0,
                    'Codigo', w1,
                    'Nombre', w1,
                    'IdStatus', w2
                ]);
            }
        }
    }
}
