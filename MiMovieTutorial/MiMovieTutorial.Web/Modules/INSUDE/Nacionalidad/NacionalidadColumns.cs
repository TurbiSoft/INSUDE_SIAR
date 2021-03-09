using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Nacionalidad")]
    [BasedOnRow(typeof(Entities.NacionalidadRow), CheckNames = true)]
    public class NacionalidadColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdNacionalidad { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Estado { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
    }
}