using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Facultades")]
    [BasedOnRow(typeof(Entities.FacultadesRow), CheckNames = true)]
    public class FacultadesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdInstitucion { get; set; }
      //  public String IdCompaniaSiglas { get; set; }
        public String IdCompaniaNombre { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
    }
}