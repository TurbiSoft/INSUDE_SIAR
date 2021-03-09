using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.TipoDeCalificacion")]
    [BasedOnRow(typeof(Entities.TipoDeCalificacionRow), CheckNames = true)]
    public class TipoDeCalificacionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdTipoCalificacion { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
    }
}