using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Existencialma")]
    [BasedOnRow(typeof(Entities.ExistencialmaRow), CheckNames = true)]
    public class ExistencialmaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Sec { get; set; }
        public String CodProDesPro { get; set; }
        public String AlmacenNomalmacen { get; set; }
        public Decimal Existencia { get; set; }
    }
}