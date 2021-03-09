using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Existencialma")]
    [BasedOnRow(typeof(Entities.ExistencialmaRow), CheckNames = true)]
    public class ExistencialmaForm
    {
        public Int32 CodPro { get; set; }
        public Int32 Almacen { get; set; }
        public Decimal Existencia { get; set; }
    }
}