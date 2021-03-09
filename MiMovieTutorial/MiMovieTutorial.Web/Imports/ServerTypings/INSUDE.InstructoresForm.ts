namespace MiMovieTutorial.INSUDE {
    export interface InstructoresForm {
        Codigo: Serenity.StringEditor;
        Nombres: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        NivelAcademico: Serenity.StringEditor;
        IdUsuario: Serenity.IntegerEditor;
        Estado: Serenity.StringEditor;
        CreateUser: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        Identificacion: Serenity.StringEditor;
        TipoIdentificacion: Serenity.StringEditor;
        LastUpdatedAt: Serenity.DateEditor;
        FechaIngreso: Serenity.DateEditor;
        CorreoElectronico: Serenity.StringEditor;
        Sexo: Serenity.StringEditor;
    }

    export class InstructoresForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Instructores';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InstructoresForm.init)  {
                InstructoresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(InstructoresForm, [
                    'Codigo', w0,
                    'Nombres', w0,
                    'Telefono', w0,
                    'NivelAcademico', w0,
                    'IdUsuario', w1,
                    'Estado', w0,
                    'CreateUser', w0,
                    'CreateDate', w2,
                    'Identificacion', w0,
                    'TipoIdentificacion', w0,
                    'LastUpdatedAt', w2,
                    'FechaIngreso', w2,
                    'CorreoElectronico', w0,
                    'Sexo', w0
                ]);
            }
        }
    }
}
