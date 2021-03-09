namespace MiMovieTutorial.INSUDE {
    export interface StatusForm {
        NomStatus: Serenity.StringEditor;
    }

    export class StatusForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Status';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StatusForm.init)  {
                StatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(StatusForm, [
                    'NomStatus', w0
                ]);
            }
        }
    }
}
