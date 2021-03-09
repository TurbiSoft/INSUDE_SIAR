namespace MiMovieTutorial.INSUDE {
    export interface ExistencialmaForm {
        CodPro: Serenity.IntegerEditor;
        Almacen: Serenity.IntegerEditor;
        Existencia: Serenity.DecimalEditor;
    }

    export class ExistencialmaForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Existencialma';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExistencialmaForm.init)  {
                ExistencialmaForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ExistencialmaForm, [
                    'CodPro', w0,
                    'Almacen', w0,
                    'Existencia', w1
                ]);
            }
        }
    }
}
