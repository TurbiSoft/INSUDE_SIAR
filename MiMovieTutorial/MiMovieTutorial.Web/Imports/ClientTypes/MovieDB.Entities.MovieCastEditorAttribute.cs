using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MiMovieTutorial.MovieDB.Entities
{
    public partial class MovieCastEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MiMovieTutorial.MovieDB.Entities.MovieCastEditor";

        public MovieCastEditorAttribute()
            : base(Key)
        {
        }
    }
}
