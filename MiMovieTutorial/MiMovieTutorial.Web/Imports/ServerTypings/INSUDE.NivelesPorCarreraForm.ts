namespace MiMovieTutorial.INSUDE {
    export interface NivelesPorCarreraForm {
        IdTitulo: Serenity.IntegerEditor;
        Nombre: Serenity.StringEditor;
        Orden: Serenity.IntegerEditor;
        IdTipoCalificacion: Serenity.IntegerEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
    }

    export class NivelesPorCarreraForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.NivelesPorCarrera';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NivelesPorCarreraForm.init)  {
                NivelesPorCarreraForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(NivelesPorCarreraForm, [
                    'IdTitulo', w0,
                    'Nombre', w1,
                    'Orden', w0,
                    'IdTipoCalificacion', w0,
                    'CreateDate', w2,
                    'CreateUser', w1
                ]);
            }
        }
    }
}
