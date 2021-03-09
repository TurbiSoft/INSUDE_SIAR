using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("CAMPUSDATA"), Module("INSUDE"), TableName("[dbo].[Existencialma]")]
    [DisplayName("Existencia Almacenes"), InstanceName("Existencia")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ExistencialmaRow : Row<ExistencialmaRow.RowFields>, IIdRow
    {
        [DisplayName("Secuencia"), Column("sec"), Identity, IdProperty]
        public Int32? Sec
        {
            get => fields.Sec[this];
            set => fields.Sec[this] = value;
        }

        [DisplayName("Cod Pro"), Column("cod_pro"), NotNull, ForeignKey("[dbo].[mproduct]", "cod_pro"), LeftJoin("jCodPro"), TextualField("CodProDesPro")]
        public Int32? CodPro
        {
            get => fields.CodPro[this];
            set => fields.CodPro[this] = value;
        }

        [DisplayName("Almacen"), NotNull, ForeignKey("[dbo].[malmacen]", "almacenid"), LeftJoin("jAlmacen"), TextualField("AlmacenNomalmacen")]
        public Int32? Almacen
        {
            get => fields.Almacen[this];
            set => fields.Almacen[this] = value;
        }

        [DisplayName("Existencia"), Column("existencia"), Size(13), Scale(2)]
        public Decimal? Existencia
        {
            get => fields.Existencia[this];
            set => fields.Existencia[this] = value;
        }

        [DisplayName("Cod Pro Des Pro"), Expression("jCodPro.[des_pro]")]
        public String CodProDesPro
        {
            get => fields.CodProDesPro[this];
            set => fields.CodProDesPro[this] = value;
        }

        [DisplayName("Cod Pro Precio"), Expression("jCodPro.[precio]")]
        public Decimal? CodProPrecio
        {
            get => fields.CodProPrecio[this];
            set => fields.CodProPrecio[this] = value;
        }

        [DisplayName("Almacen Nomalmacen"), Expression("jAlmacen.[nomalmacen]")]
        public String AlmacenNomalmacen
        {
            get => fields.AlmacenNomalmacen[this];
            set => fields.AlmacenNomalmacen[this] = value;
        }

        public ExistencialmaRow()
            : base()
        {
        }

        public ExistencialmaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Sec;
            public Int32Field CodPro;
            public Int32Field Almacen;
            public DecimalField Existencia;

            public StringField CodProDesPro;
            public DecimalField CodProPrecio;

            public StringField AlmacenNomalmacen;
        }
    }
}
