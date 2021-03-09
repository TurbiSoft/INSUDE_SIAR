using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Sexo")]
    [BasedOnRow(typeof(Entities.SexoRow), CheckNames = true)]
    public class SexoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Codsexo { get; set; }
        public String Nomsexo { get; set; }
    }
}