namespace MiMovieTutorial.INSUDE {
    export interface EscuelasForm {
        IdInstitucion: Serenity.LookupEditor;
        Nombre: Serenity.StringEditor;
        Siglas: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Contacto: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
    }

    export class EscuelasForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Escuelas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EscuelasForm.init)  {
                EscuelasForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(EscuelasForm, [
                    'IdInstitucion', w0,
                    'Nombre', w1,
                    'Siglas', w1,
                    'Direccion', w1,
                    'Telefono', w1,
                    'Contacto', w1,
                    'Estado', w1
                ]);
            }
        }
    }
}
