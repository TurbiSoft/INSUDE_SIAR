using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Malmacen")]
    [BasedOnRow(typeof(Entities.MalmacenRow), CheckNames = true)]
    public class MalmacenForm
    {
        public String Nomalmacen { get; set; }
    }
}