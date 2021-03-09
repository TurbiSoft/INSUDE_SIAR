namespace MiMovieTutorial.INSUDE {
    export interface TipoDeCalificacionForm {
        Nombre: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
    }

    export class TipoDeCalificacionForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.TipoDeCalificacion';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TipoDeCalificacionForm.init)  {
                TipoDeCalificacionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(TipoDeCalificacionForm, [
                    'Nombre', w0,
                    'CreateDate', w1,
                    'CreateUser', w0
                ]);
            }
        }
    }
}
