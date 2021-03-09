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
    [ConnectionKey("default"), Module("MovieDB"), TableName("[dbo].[MovieCast]")]
    [DisplayName("Movie Cast"), InstanceName("Movie Cast")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MovieCastRow : Row<MovieCastRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Movie Cast Id"), Identity, IdProperty]
        public Int32? MovieCastId
        {
            get => fields.MovieCastId[this];
            set => fields.MovieCastId[this] = value;
        }

        [DisplayName("Movie"), NotNull, ForeignKey("[dbo].[Movie]", "MovieId"), LeftJoin("jMovie"), TextualField("MovieTitle")]
        public Int32? MovieId
        {
            get => fields.MovieId[this];
            set => fields.MovieId[this] = value;
        }


        [DisplayName("Actor/Actriz"), NotNull, ForeignKey("[dbo].[Person]", "PersonId"), LeftJoin("jPerson"), TextualField("PersonFirstname")]
        [LookupEditor(typeof(PersonRow))]
        public Int32? PersonId
        {
            get => fields.PersonId[this];
            set => fields.PersonId[this] = value;
        }

        [DisplayName("Personaje"), Size(50), QuickSearch, NameProperty]
        public String Character
        {
            get => fields.Character[this];
            set => fields.Character[this] = value;
        }

        [DisplayName("Movie Title"), Expression("jMovie.[Title]")]
        public String MovieTitle
        {
            get => fields.MovieTitle[this];
            set => fields.MovieTitle[this] = value;
        }

        [DisplayName("Movie Description"), Expression("jMovie.[Description]")]
        public String MovieDescription
        {
            get => fields.MovieDescription[this];
            set => fields.MovieDescription[this] = value;
        }

        [DisplayName("Movie Storyline"), Expression("jMovie.[Storyline]")]
        public String MovieStoryline
        {
            get => fields.MovieStoryline[this];
            set => fields.MovieStoryline[this] = value;
        }

        [DisplayName("Movie Year"), Expression("jMovie.[Year]")]
        public Int32? MovieYear
        {
            get => fields.MovieYear[this];
            set => fields.MovieYear[this] = value;
        }

        [DisplayName("Movie Release Date"), Expression("jMovie.[ReleaseDate]")]
        public DateTime? MovieReleaseDate
        {
            get => fields.MovieReleaseDate[this];
            set => fields.MovieReleaseDate[this] = value;
        }

        [DisplayName("Movie Runtime"), Expression("jMovie.[Runtime]")]
        public Int32? MovieRuntime
        {
            get => fields.MovieRuntime[this];
            set => fields.MovieRuntime[this] = value;
        }

        [DisplayName("Movie Kind"), Expression("jMovie.[Kind]")]
        public Int32? MovieKind
        {
            get => fields.MovieKind[this];
            set => fields.MovieKind[this] = value;
        }
       
        [DisplayName("Person Firstname"), Expression("jPerson.Firstname")]      
        public String PersonFirstname
        {
            get => fields.PersonFirstname[this];
            set => fields.PersonFirstname[this] = value;
        }

        [DisplayName("Person Lastname"), Expression("jPerson.[Lastname]")]
        public String PersonLastname
        {
            get => fields.PersonLastname[this];
            set => fields.PersonLastname[this] = value;
        }

        [DisplayName("Actor/Actress"),
         Expression("(jPerson.Firstname + ' ' + jPerson.Lastname)")]
        public String PersonFullname
        {
            get { return Fields.PersonFullname[this]; }
            set { Fields.PersonFullname[this] = value; }
        }


        [DisplayName("Person Birth Date"), Expression("jPerson.[BirthDate]")]
        public DateTime? PersonBirthDate
        {
            get => fields.PersonBirthDate[this];
            set => fields.PersonBirthDate[this] = value;
        }

        [DisplayName("Person Birth Place"), Expression("jPerson.[BirthPlace]")]
        public String PersonBirthPlace
        {
            get => fields.PersonBirthPlace[this];
            set => fields.PersonBirthPlace[this] = value;
        }

        [DisplayName("Person Gender"), Expression("jPerson.[Gender]")]
        public Int32? PersonGender
        {
            get => fields.PersonGender[this];
            set => fields.PersonGender[this] = value;
        }

        [DisplayName("Person Height"), Expression("jPerson.[Height]")]
        public Int32? PersonHeight
        {
            get => fields.PersonHeight[this];
            set => fields.PersonHeight[this] = value;
        }


       

        public MovieCastRow()
            : base()
        {
        }

        public MovieCastRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MovieCastId;
            public Int32Field MovieId;
            public Int32Field PersonId;
            public StringField Character;

            public StringField MovieTitle;
            public StringField MovieDescription;
            public StringField MovieStoryline;
            public Int32Field MovieYear;
            public DateTimeField MovieReleaseDate;
            public Int32Field MovieRuntime;
            public Int32Field MovieKind;

            public StringField PersonFirstname;
            public StringField PersonLastname;
            public DateTimeField PersonBirthDate;
            public StringField PersonBirthPlace;
            public Int32Field PersonGender;
            public Int32Field PersonHeight;

            public readonly StringField PersonFullname;
        }
    }
}
