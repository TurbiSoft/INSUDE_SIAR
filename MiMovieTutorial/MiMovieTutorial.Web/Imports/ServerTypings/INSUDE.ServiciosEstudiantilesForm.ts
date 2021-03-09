namespace MiMovieTutorial.INSUDE {
    export interface ServiciosEstudiantilesForm {
        Descripcion: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
    }

    export class ServiciosEstudiantilesForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.ServiciosEstudiantiles';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServiciosEstudiantilesForm.init)  {
                ServiciosEstudiantilesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(ServiciosEstudiantilesForm, [
                    'Descripcion', w0,
                    'CreateDate', w1,
                    'LastUpdatedAt', w1,
                    'CreateUser', w0
                ]);
            }
        }
    }
}
