using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Estadocivil")]
    [BasedOnRow(typeof(Entities.EstadocivilRow), CheckNames = true)]
    public class EstadocivilForm
    {
        public String NomEstado { get; set; }
    }
}