using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Titulos")]
    [BasedOnRow(typeof(Entities.TitulosRow), CheckNames = true)]
    public class TitulosForm
    {
        public String Codigo { get; set; }
        public String Nombre { get; set; }
        public String Mencion { get; set; }
        public Int32 IdEscuela { get; set; }
        public Int32 IdPensum { get; set; }
        public Decimal MontoInscripcion { get; set; }
        public Decimal Costo { get; set; }
        public Boolean CostoCredito { get; set; }
        public String TituloOtorgado { get; set; }
        public Int32 IdRequisitoNacional { get; set; }
        public Int32 IdRequisitoExtrangero { get; set; }
        public String TipoMatricula { get; set; }
        public String Estado { get; set; }
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
        public String CicloAcademico { get; set; }
    }
}