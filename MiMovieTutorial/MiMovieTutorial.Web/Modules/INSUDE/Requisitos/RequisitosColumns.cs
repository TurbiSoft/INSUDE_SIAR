using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Requisitos")]
    [BasedOnRow(typeof(Entities.RequisitosRow), CheckNames = true)]
    public class RequisitosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdRequisito { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
    }
}