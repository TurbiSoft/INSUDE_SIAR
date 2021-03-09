namespace MiMovieTutorial.INSUDE {
    export interface NacionalidadForm {
        Nombre: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
    }

    export class NacionalidadForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Nacionalidad';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NacionalidadForm.init)  {
                NacionalidadForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(NacionalidadForm, [
                    'Nombre', w0,
                    'Estado', w0,
                    'CreateUser', w0,
                    'CreateDate', w1
                ]);
            }
        }
    }
}
