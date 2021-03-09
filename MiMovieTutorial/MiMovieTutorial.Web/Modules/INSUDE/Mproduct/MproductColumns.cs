using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Mproduct")]
    [BasedOnRow(typeof(Entities.MproductRow), CheckNames = true)]
    public class MproductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodPro { get; set; }
        [EditLink]
        public String DesPro { get; set; }
        public Decimal Precio { get; set; }
    }
}