namespace MiMovieTutorial.INSUDE {
    export interface EstadocivilForm {
        NomEstado: Serenity.StringEditor;
    }

    export class EstadocivilForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Estadocivil';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EstadocivilForm.init)  {
                EstadocivilForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EstadocivilForm, [
                    'NomEstado', w0
                ]);
            }
        }
    }
}
