namespace MiMovieTutorial.INSUDE {
    export interface RequisitosForm {
        Nombre: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
    }

    export class RequisitosForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Requisitos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RequisitosForm.init)  {
                RequisitosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(RequisitosForm, [
                    'Nombre', w0,
                    'CreateUser', w0,
                    'CreateDate', w1
                ]);
            }
        }
    }
}
