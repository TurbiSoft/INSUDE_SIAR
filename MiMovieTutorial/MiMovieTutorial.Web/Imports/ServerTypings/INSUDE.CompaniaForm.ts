namespace MiMovieTutorial.INSUDE {
    export interface CompaniaForm {
        Siglas: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        Rnc: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        Correo: Serenity.StringEditor;
        Website: Serenity.StringEditor;
    }

    export class CompaniaForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Compania';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompaniaForm.init)  {
                CompaniaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CompaniaForm, [
                    'Siglas', w0,
                    'Nombre', w0,
                    'Rnc', w0,
                    'Direccion', w0,
                    'Telefono', w0,
                    'Fax', w0,
                    'Logo', w0,
                    'Correo', w0,
                    'Website', w0
                ]);
            }
        }
    }
}
