using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Columns
{
    [ColumnsScript("INSUDE.Titulos")]
    [BasedOnRow(typeof(Entities.TitulosRow), CheckNames = true)]
    public class TitulosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdTitulo { get; set; }
        [EditLink]
        public String Codigo { get; set; }
        public String Nombre { get; set; }
        public String Mencion { get; set; }
        public String IdEscuelaNombre { get; set; }
        public Int32 IdPensum { get; set; }
        public Decimal MontoInscripcion { get; set; }
        public Decimal Costo { get; set; }
        public Boolean CostoCredito { get; set; }
        public String TituloOtorgado { get; set; }
        public String IdRequisitoNacionalNombre { get; set; }
        public String IdRequisitoExtrangeroNombre { get; set; }
        public String TipoMatricula { get; set; }
        public String Estado { get; set; }
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
        public String CicloAcademico { get; set; }
    }
}