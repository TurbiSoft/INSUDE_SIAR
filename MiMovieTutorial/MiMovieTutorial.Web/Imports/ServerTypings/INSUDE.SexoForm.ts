namespace MiMovieTutorial.INSUDE {
    export interface SexoForm {
        Nomsexo: Serenity.StringEditor;
    }

    export class SexoForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Sexo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SexoForm.init)  {
                SexoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SexoForm, [
                    'Nomsexo', w0
                ]);
            }
        }
    }
}
