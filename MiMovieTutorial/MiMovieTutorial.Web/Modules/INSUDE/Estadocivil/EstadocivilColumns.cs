using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Estadocivil")]
    [BasedOnRow(typeof(Entities.EstadocivilRow), CheckNames = true)]
    public class EstadocivilColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodEstado { get; set; }
        [EditLink]
        public String NomEstado { get; set; }
    }
}