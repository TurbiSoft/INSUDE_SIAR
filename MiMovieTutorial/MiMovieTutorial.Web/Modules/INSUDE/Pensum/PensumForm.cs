using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Pensum")]
    [BasedOnRow(typeof(Entities.PensumRow), CheckNames = true)]
    public class PensumForm
    {
        public Int32 IdTitulo { get; set; }
        public String Codigo { get; set; }
        public String Nombre { get; set; }

        // Agregue el ID del campo
      //  public String Estado { get; set; }

        public Int32? IdStatus { get; set; }


        /* Estos son internos
        public DateTime CreateDate { get; set; }
        public String CreateUser { get; set; }
        public DateTime LastUpdatedAt { get; set; }
        */
    }
}