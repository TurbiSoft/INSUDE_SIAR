using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Indices")]
    [BasedOnRow(typeof(Entities.IndicesRow), CheckNames = true)]
    public class IndicesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdIndice { get; set; }
        [EditLink]
        public String Literal { get; set; }
        public Int16 Puntos { get; set; }
        public Int16 Rango1 { get; set; }
        public Int16 Rango2 { get; set; }
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
        public String Descripcion { get; set; }
    }
}