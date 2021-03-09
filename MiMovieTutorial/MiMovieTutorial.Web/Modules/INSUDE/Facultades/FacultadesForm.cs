/**********************************************************************
* 06 - 03 - 2021 Agregue combo de compania, quite campos usario y fecha
 * de Creacion del formulario de Edicion. Puse por defecto el usuario 
 * en logueado y fecha del dia. Los quito de la edicion
 *******************************************************************/
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MiMovieTutorial.INSUDE.Forms
{
    [FormScript("INSUDE.Facultades")]
    [BasedOnRow(typeof(Entities.FacultadesRow), CheckNames = true)]
    public class FacultadesForm
    {
        [DisplayName("Empresa")]
        public Int32 IdCompania { get; set; }

        [DisplayName("Nombre de la Facultad"),Required]
        public String Nombre { get; set; }
        /*
        public String CreateUser { get; set; }
        public DateTime CreateDate { get; set; }
        */
    }
}