using MiMovieTutorial.Web.Modules.MovieDB.Movie;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.MovieDB.Entities
{
    [ConnectionKey("default"), Module("MovieDB"), TableName("[dbo].[Movie]")]
    [DisplayName("Movie"), InstanceName("Movie")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MovieRow : Row<MovieRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Movie Id"), Identity, IdProperty]
        public Int32? MovieId
        {
            get => fields.MovieId[this];
            set => fields.MovieId[this] = value;
        }

        [DisplayName("Title"), Size(200), NotNull, QuickSearch, NameProperty]
        public String Title
        {
            get => fields.Title[this];
            set => fields.Title[this] = value;
        }

        [DisplayName("Description"), Size(1000), QuickSearch]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Storyline"), QuickSearch]
        public String Storyline
        {
            get => fields.Storyline[this];
            set => fields.Storyline[this] = value;
        }

        [DisplayName("Year"), QuickSearch]
        public Int32? Year
        {
            get => fields.Year[this];
            set => fields.Year[this] = value;
        }

        [DisplayName("Release Date")]
        public DateTime? ReleaseDate
        {
            get => fields.ReleaseDate[this];
            set => fields.ReleaseDate[this] = value;
        }

        [DisplayName("Runtime(minutos)")]
        public Int32? Runtime
        {
            get => fields.Runtime[this];
            set => fields.Runtime[this] = value;
        }

        [DisplayName("Kind"), NotNull, DefaultValue(MovieKind.Film)]
        public MovieKind? Kind
        {
            get { return (MovieKind?)Fields.Kind[this]; }
            set { Fields.Kind[this] = (Int32?)value; }
        }

        /*
        // aqui establecemso una relacion de llave foraea, g es el alias de la tabla
        // relacionada. Esto es para traer el nombre del Genero en Genre
        [DisplayName("Genre"), ForeignKey("Genre", "GenreId"), LeftJoin("g")]
'
        // genera un form de bsuqueda, permite insertar en el lugar, especifica el 
        // tipo de dialogo de busqueda
        [LookupEditor(typeof(GenreRow), InplaceAdd = true, DialogType = "MovieDB.Genre")]
        public Int32? GenreId
        {
            get { return Fields.GenreId[this]; }
            set { Fields.GenreId[this] = value; }
        }

        
        // este es un campo de query, similar a una vista de SQL Server
        // e es el alias de la tabla forarea, trae el nombre del genero
        [DisplayName("Genre"), Expression("g.Name")]
        // genera un dialogo para filtrar en este campo/columna
        [Width(100), QuickFilter]
        public String GenreName
        {
            get { return Fields.GenreName[this]; }
            set { Fields.GenreName[this] = value; }
        }
        */
        [DisplayName("Genres")]
        [LookupEditor(typeof(GenreRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(MovieGenresRow), "MovieId", "GenreId")]
        public List<Int32> GenreList
        {
            get { return Fields.GenreList[this]; }
            set { Fields.GenreList[this] = value; }
        }


        [DisplayName("Lista Elenco"), NotMapped]
        [MasterDetailRelation(foreignKey: "MovieId", IncludeColumns = "PersonFullname")]
        public List<MovieCastRow> CastList
        {
            get { return Fields.CastList[this]; }
            set { Fields.CastList[this] = value; }
        }

        [DisplayName("Primary Image"), Size(100),
         ImageUploadEditor(FilenameFormat = "Movie/PrimaryImage/~")]
        public string PrimaryImage
        {
            get { return Fields.PrimaryImage[this]; }
            set { Fields.PrimaryImage[this] = value; }
        }

        [DisplayName("Gallery Images"),
         MultipleImageUploadEditor(FilenameFormat = "Movie/GalleryImages/~")]
        public string GalleryImages
        {
            get { return Fields.GalleryImages[this]; }
            set { Fields.GalleryImages[this] = value; }
        }


        public MovieRow()
            : base()
        {
        }

        public MovieRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MovieId;
            public StringField Title;
            public StringField Description;
            public StringField Storyline;
            public Int32Field Year;
            public DateTimeField ReleaseDate;
            public Int32Field Runtime;
            public readonly Int32Field Kind;
            // public readonly Int32Field GenreId;
            //  public readonly StringField GenreName;

            public ListField<Int32> GenreList;

            // Lista del elenco de actores de esta pelicula
           public readonly RowListField<MovieCastRow> CastList;

            // Manejo de Imagenes
            public readonly StringField PrimaryImage;
            public readonly StringField GalleryImages;

            public RowFields()
               // : base("")
            {
                LocalTextPrefix = "MovieDB.Movie";
            }
        }
    }
}
