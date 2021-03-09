namespace MiMovieTutorial.INSUDE {
    export interface MalmacenForm {
        Nomalmacen: Serenity.StringEditor;
    }

    export class MalmacenForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Malmacen';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MalmacenForm.init)  {
                MalmacenForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MalmacenForm, [
                    'Nomalmacen', w0
                ]);
            }
        }
    }
}
