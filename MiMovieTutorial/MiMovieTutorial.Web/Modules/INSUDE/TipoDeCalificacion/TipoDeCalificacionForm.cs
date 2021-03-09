using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.TipoDeCalificacion")]
    [BasedOnRow(typeof(Entities.TipoDeCalificacionRow), CheckNames = true)]
    public class TipoDeCalificacionForm
    {
        public String Nombre { get; set; }
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
    }
}