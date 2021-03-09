using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Nacionalidad]")]
    [DisplayName("Nacionalidad"), InstanceName("Nacionalidad")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("INSUDE.Nacionalidad")]
    public sealed class NacionalidadRow : Row<NacionalidadRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Nacionalidad"), Column("IDNacionalidad"), Identity, IdProperty]
        public Int32? IdNacionalidad
        {
            get => fields.IdNacionalidad[this];
            set => fields.IdNacionalidad[this] = value;
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

        [DisplayName("Create User"), Size(150)]
        public String CreateUser
        {
            get => fields.CreateUser[this];
            set => fields.CreateUser[this] = value;
        }

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get => fields.CreateDate[this];
            set => fields.CreateDate[this] = value;
        }

        public NacionalidadRow()
            : base()
        {
        }

        public NacionalidadRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdNacionalidad;
            public StringField Nombre;
            public StringField Estado;
            public StringField CreateUser;
            public DateTimeField CreateDate;
        }
    }
}
