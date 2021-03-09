using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.ServiciosEstudiantiles")]
    [BasedOnRow(typeof(Entities.ServiciosEstudiantilesRow), CheckNames = true)]
    public class ServiciosEstudiantilesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Descripcion { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdatedAt { get; set; }
        public String CreateUser { get; set; }
    }
}