using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Dependencias")]
    [BasedOnRow(typeof(Entities.DependenciasRow), CheckNames = true)]
    public class DependenciasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDependencia { get; set; }
        [EditLink]
        public String Nombre { get; set; }
    }
}