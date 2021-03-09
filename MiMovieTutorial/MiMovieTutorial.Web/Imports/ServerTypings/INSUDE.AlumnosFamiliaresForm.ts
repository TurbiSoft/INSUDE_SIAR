namespace MiMovieTutorial.INSUDE {
    export interface AlumnosFamiliaresForm {
        IdAlumno: Serenity.IntegerEditor;
        Parentesco: Serenity.StringEditor;
        Nombres: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
    }

    export class AlumnosFamiliaresForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.AlumnosFamiliares';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AlumnosFamiliaresForm.init)  {
                AlumnosFamiliaresForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(AlumnosFamiliaresForm, [
                    'IdAlumno', w0,
                    'Parentesco', w1,
                    'Nombres', w1,
                    'Telefono', w1,
                    'CreateUser', w1,
                    'CreateDate', w2
                ]);
            }
        }
    }
}
