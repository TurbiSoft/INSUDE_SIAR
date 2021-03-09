namespace MiMovieTutorial.INSUDE {
    export interface AlumnosForm {
        Nombres: Serenity.StringEditor;
        Apellidos: Serenity.StringEditor;
        Sexo: Serenity.LookupEditor;
        Matricula: Serenity.StringEditor;
        IdRango: Serenity.LookupEditor;
        TipoIdentificacion: Serenity.StringEditor;
        Identificacion: Serenity.StringEditor;
        EstadoCivil: Serenity.LookupEditor;
        IdPais: Serenity.LookupEditor;
        IdNacionalidad: Serenity.LookupEditor;
        IdInstitucion: Serenity.LookupEditor;
        IdDependencia: Serenity.LookupEditor;
        lstCarreras: Serenity.LookupEditor;
        FechaNacimiento: Serenity.DateEditor;
        LugarNacimiento: Serenity.StringEditor;
        FechaRegistro: Serenity.DateEditor;
        FechaIngreso: Serenity.DateEditor;
        CorreoElectronico: Serenity.StringEditor;
        TelHogar: Serenity.StringEditor;
        TelCelular: Serenity.StringEditor;
        Observaciones: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Ciudad: Serenity.StringEditor;
        IdUsuario: Serenity.IntegerEditor;
        DireccionOficina: Serenity.StringEditor;
        Funcion: Serenity.StringEditor;
        TelOficina: Serenity.StringEditor;
        DpMatricula: Serenity.StringEditor;
        EcMatricula: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
    }

    export class AlumnosForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Alumnos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AlumnosForm.init)  {
                AlumnosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(AlumnosForm, [
                    'Nombres', w0,
                    'Apellidos', w0,
                    'Sexo', w1,
                    'Matricula', w0,
                    'IdRango', w1,
                    'TipoIdentificacion', w0,
                    'Identificacion', w0,
                    'EstadoCivil', w1,
                    'IdPais', w1,
                    'IdNacionalidad', w1,
                    'IdInstitucion', w1,
                    'IdDependencia', w1,
                    'lstCarreras', w1,
                    'FechaNacimiento', w2,
                    'LugarNacimiento', w0,
                    'FechaRegistro', w2,
                    'FechaIngreso', w2,
                    'CorreoElectronico', w0,
                    'TelHogar', w0,
                    'TelCelular', w0,
                    'Observaciones', w0,
                    'Tipo', w0,
                    'Direccion', w0,
                    'Ciudad', w0,
                    'IdUsuario', w3,
                    'DireccionOficina', w0,
                    'Funcion', w0,
                    'TelOficina', w0,
                    'DpMatricula', w0,
                    'EcMatricula', w0,
                    'Estado', w0
                ]);
            }
        }
    }
}
