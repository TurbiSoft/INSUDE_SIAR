using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Pais]")]
    [DisplayName("Pais"), InstanceName("Pais")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    // [LookupEditor("INSUDE.Pais")]
    [LookupScript("INSUDE.Pais")]

    public sealed class PaisRow : Row<PaisRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Pais"), Column("IDPais"), Identity, IdProperty]
        public Int32? IdPais
        {
            get => fields.IdPais[this];
            set => fields.IdPais[this] = value;
        }

        [DisplayName("Nombre"), Size(100), QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Estado"), Size(20)]
        public String Estado
        {
            get => fields.Estado[this];
            set => fields.Estado[this] = value;
        }

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get => fields.CreateDate[this];
            set => fields.CreateDate[this] = value;
        }

        [DisplayName("Create User"), Size(150)]
        public String CreateUser
        {
            get => fields.CreateUser[this];
            set => fields.CreateUser[this] = value;
        }

        public PaisRow()
            : base()
        {
        }

        public PaisRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPais;
            public StringField Nombre;
            public StringField Estado;
            public DateTimeField CreateDate;
            public StringField CreateUser;
        }
    }
}
