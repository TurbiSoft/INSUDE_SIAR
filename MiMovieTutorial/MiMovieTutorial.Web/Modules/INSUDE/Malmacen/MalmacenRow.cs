using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[malmacen]")]
    [DisplayName("Almacenes"), InstanceName("Almacenes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("INSUEDE.Malmacen")]
    public sealed class MalmacenRow : Row<MalmacenRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Almacenid"), Column("almacenid"), Identity, IdProperty]
        public Int32? Almacenid
        {
            get => fields.Almacenid[this];
            set => fields.Almacenid[this] = value;
        }

        [DisplayName("Nomalmacen"), Column("nomalmacen"), Size(10), QuickSearch, NameProperty]
        public String Nomalmacen
        {
            get => fields.Nomalmacen[this];
            set => fields.Nomalmacen[this] = value;
        }

        public MalmacenRow()
            : base()
        {
        }

        public MalmacenRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Almacenid;
            public StringField Nomalmacen;
        }
    }
}
