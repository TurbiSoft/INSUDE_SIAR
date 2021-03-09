namespace MiMovieTutorial.INSUDE {
    export interface MproductForm {
        DesPro: Serenity.StringEditor;
        Precio: Serenity.DecimalEditor;
        ListaExistencia: ExistenciAlmaEditor;
    }

    export class MproductForm extends Serenity.PrefixedContext {
        static formKey = 'INSUDE.Mproduct';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MproductForm.init)  {
                MproductForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = ExistenciAlmaEditor;

                Q.initFormType(MproductForm, [
                    'DesPro', w0,
                    'Precio', w1,
                    'ListaExistencia', w2
                ]);
            }
        }
    }
}
