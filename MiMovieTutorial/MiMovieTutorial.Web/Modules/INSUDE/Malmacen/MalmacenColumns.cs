using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Malmacen")]
    [BasedOnRow(typeof(Entities.MalmacenRow), CheckNames = true)]
    public class MalmacenColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Almacenid { get; set; }
        [EditLink]
        public String Nomalmacen { get; set; }
    }
}