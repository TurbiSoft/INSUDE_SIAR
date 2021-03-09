using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Rangos]")]
    [DisplayName("Rangos"), InstanceName("Rangos")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("INSUDE.Rangos")]
    public sealed class RangosRow : Row<RangosRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Rango"), Column("IDRango"), Identity, IdProperty]
        public Int32? IdRango
        {
            get => fields.IdRango[this];
            set => fields.IdRango[this] = value;
        }

        [DisplayName("Nombre"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        public RangosRow()
            : base()
        {
        }

        public RangosRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdRango;
            public StringField Nombre;
        }
    }
}
