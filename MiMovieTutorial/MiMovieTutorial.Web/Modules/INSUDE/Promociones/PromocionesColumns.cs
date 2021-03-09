using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Promociones")]
    [BasedOnRow(typeof(Entities.PromocionesRow), CheckNames = true)]
    public class PromocionesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdPromocion { get; set; }
        public String IdTituloCodigo { get; set; }
        [EditLink]
        public String Descripcion { get; set; }
        public Int32 YearInicio { get; set; }
        public Int32 YearFin { get; set; }
        public String Estado { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdatedAt { get; set; }
    }
}