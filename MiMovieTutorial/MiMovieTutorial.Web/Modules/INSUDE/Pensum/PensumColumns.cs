using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Pensum")]
    [BasedOnRow(typeof(Entities.PensumRow), CheckNames = true)]
    public class PensumColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]      
        public String IdTituloCodigo { get; set; }
        [EditLink]
        public String Codigo { get; set; }
        public String Nombre { get; set; }

        [DisplayName("Carrera"), Width(100)]
        public String IdTituloNombre { get; set; }
        
        [DisplayName("Estatus"), Width(100)]
        public String IdStatusNombre { get; set; }

        // Visualizo el nombre del Status
        // public Int32? IdStatus { get; set; }

        /* Estos campos son internos
           public Int32 IdPensum { get; set; }
        public String Estado { get; set; }
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
        public DateTime LastUpdatedAt { get; set; }
        */
    }
}