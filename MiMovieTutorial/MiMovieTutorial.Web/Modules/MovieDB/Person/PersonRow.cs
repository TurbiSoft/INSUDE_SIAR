using INSUDE_SIAR.Web.Modules.MovieDB;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.MovieDB.Entities
{
    [ConnectionKey("default"), Module("MovieDB"), TableName("[dbo].[Person]")]
    [DisplayName("Person"), InstanceName("Person")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("MovieDB.Person")]
    public sealed class PersonRow : Row<PersonRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Person Id"), Identity, IdProperty]
        public Int32? PersonId
        {
            get => fields.PersonId[this];
            set => fields.PersonId[this] = value;
        }

        [DisplayName("Firstname"), Size(50), NotNull, QuickSearch, NameProperty]
        public String Firstname
        {
            get => fields.Firstname[this];
            set => fields.Firstname[this] = value;
        }

        [DisplayName("Lastname"), Size(50), NotNull]
        public String Lastname
        {
            get => fields.Lastname[this];
            set => fields.Lastname[this] = value;
        }

        // Agregamos esta campo como una Expresion, como un campo de una vista
        // No pertenece a la Tabla
        [DisplayName("Full Name"),
        Expression("(t0.Firstname + ' ' + t0.Lastname)"), QuickSearch]
        public String Fullname
        {
            get { return Fields.Fullname[this]; }
            set { Fields.Fullname[this] = value; }
        }
        /*
        //... change NameField to Fullname
        StringField INameRow.NameField
        {
            get { return Fields.Fullname; }
        }
        */

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get => fields.BirthDate[this];
            set => fields.BirthDate[this] = value;
        }

        [DisplayName("Birth Place"), Size(100)]
        public String BirthPlace
        {
            get => fields.BirthPlace[this];
            set => fields.BirthPlace[this] = value;
        }

        [DisplayName("Gender")]
        /* Cambiamos el campo por una Enumeracion
        public Int32? Gender
        {
            get => fields.Gender[this];
            set => fields.Gender[this] = value;
        }
        */        
        public Gender? Gender
        {
            get { return (Gender?)Fields.Gender[this]; }
            set { Fields.Gender[this] = (Int32?)value; }
        }

        [DisplayName("Height")]
        public Int32? Height
        {
            get => fields.Height[this];
            set => fields.Height[this] = value;
        }

        [DisplayName("Primary Image"), Size(100),
         ImageUploadEditor(FilenameFormat = "Person/PrimaryImage/~")]
        public string PrimaryImage
        {
            get { return Fields.PrimaryImage[this]; }
            set { Fields.PrimaryImage[this] = value; }
        }

        [DisplayName("Gallery Images"),
         MultipleImageUploadEditor(FilenameFormat = "Person/GalleryImages/~")]
        public string GalleryImages
        {
            get { return Fields.GalleryImages[this]; }
            set { Fields.GalleryImages[this] = value; }
        }

        public PersonRow()
            : base()
        {
        }

        public PersonRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PersonId;
            public StringField Firstname;
            public StringField Lastname;
            public DateTimeField BirthDate;
            public StringField BirthPlace;
            public Int32Field Gender;
            public Int32Field Height;
            public readonly StringField Fullname;

            // Manejo de Imagenes
            public readonly StringField PrimaryImage;
            public readonly StringField GalleryImages;
        }
    }
}
