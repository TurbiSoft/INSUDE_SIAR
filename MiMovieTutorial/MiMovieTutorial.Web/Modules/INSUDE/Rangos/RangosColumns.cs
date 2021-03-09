using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Rangos")]
    [BasedOnRow(typeof(Entities.RangosRow), CheckNames = true)]
    public class RangosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdRango { get; set; }
        [EditLink]
        public String Nombre { get; set; }
    }
}