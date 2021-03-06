using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Pais")]
    [BasedOnRow(typeof(Entities.PaisRow), CheckNames = true)]
    public class PaisColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdPais { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Estado { get; set; }
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
    }
}