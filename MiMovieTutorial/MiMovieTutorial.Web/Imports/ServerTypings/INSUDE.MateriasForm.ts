namespace MiMovieTutorial.INSUDE {
    export interface MateriasForm {
        IdEscuela: Serenity.IntegerEditor;
        Codigo: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
    }

    export class MateriasForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Materias';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MateriasForm.init)  {
                MateriasForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MateriasForm, [
                    'IdEscuela', w0,
                    'Codigo', w1,
                    'Nombre', w1,
                    'Estado', w1,
                    'CreateUser', w1,
                    'CreateDate', w2,
                    'LastUpdatedAt', w2
                ]);
            }
        }
    }
}
