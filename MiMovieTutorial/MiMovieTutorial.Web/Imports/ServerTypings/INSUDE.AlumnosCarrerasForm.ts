namespace MiMovieTutorial.INSUDE {
    export interface AlumnosCarrerasForm {
        IdAlumno: Serenity.IntegerEditor;
        IdTitulo: Serenity.IntegerEditor;
        IdPensum: Serenity.IntegerEditor;
        IdTituloNivel: Serenity.IntegerEditor;
        NoRegistro: Serenity.StringEditor;
        Fecha: Serenity.DateEditor;
        Becado: Serenity.StringEditor;
        FechaGraduacion: Serenity.DateEditor;
        IdPromocion: Serenity.IntegerEditor;
        Promocion: Serenity.StringEditor;
        Libro: Serenity.IntegerEditor;
        Folio: Serenity.IntegerEditor;
        Numero: Serenity.IntegerEditor;
        Estado: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        LastUpdatedAt: Serenity.DateEditor;
    }

    export class AlumnosCarrerasForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.AlumnosCarreras';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AlumnosCarrerasForm.init)  {
                AlumnosCarrerasForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(AlumnosCarrerasForm, [
                    'IdAlumno', w0,
                    'IdTitulo', w0,
                    'IdPensum', w0,
                    'IdTituloNivel', w0,
                    'NoRegistro', w1,
                    'Fecha', w2,
                    'Becado', w1,
                    'FechaGraduacion', w2,
                    'IdPromocion', w0,
                    'Promocion', w1,
                    'Libro', w0,
                    'Folio', w0,
                    'Numero', w0,
                    'Estado', w1,
                    'CreateDate', w2,
                    'LastUpdatedAt', w2
                ]);
            }
        }
    }
}
