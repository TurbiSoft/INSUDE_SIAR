using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Compania")]
    [BasedOnRow(typeof(Entities.CompaniaRow), CheckNames = true)]
    public class CompaniaForm
    {
        public String Siglas { get; set; }
        public String Nombre { get; set; }
        public String Rnc { get; set; }
        public String Direccion { get; set; }
        public String Telefono { get; set; }
        public String Fax { get; set; }
        public String Logo { get; set; }
        public String Correo { get; set; }
        public String Website { get; set; }
    }
}