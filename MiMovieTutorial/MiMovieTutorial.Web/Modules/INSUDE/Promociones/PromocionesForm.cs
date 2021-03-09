using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Promociones")]
    [BasedOnRow(typeof(Entities.PromocionesRow), CheckNames = true)]
    public class PromocionesForm
    {
        public Int32 IdTitulo { get; set; }
        public String Descripcion { get; set; }
        public Int32 YearInicio { get; set; }
        public Int32 YearFin { get; set; }
        public String Estado { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdatedAt { get; set; }
    }
}