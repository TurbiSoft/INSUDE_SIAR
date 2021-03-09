namespace MiMovieTutorial.INSUDE {
    export interface RangosForm {
        Nombre: Serenity.StringEditor;
    }

    export class RangosForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Rangos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RangosForm.init)  {
                RangosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RangosForm, [
                    'Nombre', w0
                ]);
            }
        }
    }
}
