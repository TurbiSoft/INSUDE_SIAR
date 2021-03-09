using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MiMovieTutorial.INSUDE
{
    public partial class ExistenciAlmaEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MiMovieTutorial.INSUDE.ExistenciAlmaEditor";

        public ExistenciAlmaEditorAttribute()
            : base(Key)
        {
        }
    }
}
