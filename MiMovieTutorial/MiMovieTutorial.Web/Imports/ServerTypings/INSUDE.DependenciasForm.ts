namespace MiMovieTutorial.INSUDE {
    export interface DependenciasForm {
        Nombre: Serenity.StringEditor;
    }

    export class DependenciasForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Dependencias';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DependenciasForm.init)  {
                DependenciasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DependenciasForm, [
                    'Nombre', w0
                ]);
            }
        }
    }
}
