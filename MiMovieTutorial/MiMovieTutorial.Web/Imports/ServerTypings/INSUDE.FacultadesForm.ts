namespace MiMovieTutorial.INSUDE {
    export interface FacultadesForm {
        IdCompania: Serenity.LookupEditor;
        Nombre: Serenity.StringEditor;
    }

    export class FacultadesForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Facultades';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FacultadesForm.init)  {
                FacultadesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(FacultadesForm, [
                    'IdCompania', w0,
                    'Nombre', w1
                ]);
            }
        }
    }
}
