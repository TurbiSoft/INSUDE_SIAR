using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Status")]
    [BasedOnRow(typeof(Entities.StatusRow), CheckNames = true)]
    public class StatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdStatus { get; set; }
        [EditLink]
        public String NomStatus { get; set; }
    }
}