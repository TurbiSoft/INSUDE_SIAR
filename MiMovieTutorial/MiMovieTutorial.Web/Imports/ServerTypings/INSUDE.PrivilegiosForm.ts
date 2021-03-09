namespace MiMovieTutorial.INSUDE {
    export interface PrivilegiosForm {
        Rol: Serenity.StringEditor;
        TipoUsuario: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
    }

    export class PrivilegiosForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Privilegios';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PrivilegiosForm.init)  {
                PrivilegiosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(PrivilegiosForm, [
                    'Rol', w0,
                    'TipoUsuario', w0,
                    'Descripcion', w0,
                    'CreateUser', w0,
                    'CreateDate', w1,
                    'LastUpdatedAt', w1
                ]);
            }
        }
    }
}
