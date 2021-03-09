using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[mproduct]")]
    [DisplayName("Mproduct"), InstanceName("Mproduct")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MproductRow : Row<MproductRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Codigo"), Column("cod_pro"), Identity, IdProperty]
        public Int32? CodPro
        {
            get => fields.CodPro[this];
            set => fields.CodPro[this] = value;
        }

        [DisplayName("Descripcion"), Column("des_pro"), Size(20), QuickSearch, NameProperty]
        public String DesPro
        {
            get => fields.DesPro[this];
            set => fields.DesPro[this] = value;
        }

        [DisplayName("Precio"), Column("precio"), Size(7), Scale(2)]
        public Decimal? Precio
        {
            get => fields.Precio[this];
            set => fields.Precio[this] = value;
        }

        public MproductRow()
            : base()
        {
        }

        public MproductRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodPro;
            public StringField DesPro;
            public DecimalField Precio;
        }
    }
}
