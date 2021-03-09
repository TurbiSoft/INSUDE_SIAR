using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Mproduct")]
    [BasedOnRow(typeof(Entities.MproductRow), CheckNames = true)]
    public class MproductForm
    {
        [DisplayName("Descripcion"), Required]
        public String DesPro { get; set; }

        [DisplayName("Precio Venta")]
        public Decimal Precio { get; set; }


        // Esto indica que esta propiedad sera editada por ExistenciAlmaEditor
        [ExistenciAlmaEditor]
        public List<Entities.ExistencialmaRow> ListaExistencia { get; set; }
    }
}
