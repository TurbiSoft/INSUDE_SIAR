namespace MiMovieTutorial.INSUDE {
    export interface IndicesForm {
        Literal: Serenity.StringEditor;
        Puntos: Serenity.IntegerEditor;
        Rango1: Serenity.IntegerEditor;
        Rango2: Serenity.IntegerEditor;
        CreateDate: Serenity.DateEditor;
        CreateUser: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
    }

    export class IndicesForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Indices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IndicesForm.init)  {
                IndicesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(IndicesForm, [
                    'Literal', w0,
                    'Puntos', w1,
                    'Rango1', w1,
                    'Rango2', w1,
                    'CreateDate', w2,
                    'CreateUser', w0,
                    'Descripcion', w0
                ]);
            }
        }
    }
}
