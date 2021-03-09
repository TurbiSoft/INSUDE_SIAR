using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Dependencias")]
    [BasedOnRow(typeof(Entities.DependenciasRow), CheckNames = true)]
    public class DependenciasForm
    {
        public String Nombre { get; set; }
    }
}