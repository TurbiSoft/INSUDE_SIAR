namespace MiMovieTutorial.INSUDE {
    export interface PaisForm {
        Nombre: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
    }

    export class PaisForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Pais';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaisForm.init)  {
                PaisForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(PaisForm, [
                    'Nombre', w0,
                    'Estado', w0,
                    'CreateDate', w1,
                    'CreateUser', w0
                ]);
            }
        }
    }
}
