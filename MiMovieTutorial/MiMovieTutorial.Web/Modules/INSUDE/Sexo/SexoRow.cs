using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Sexo]")]
    [DisplayName("Sexo"), InstanceName("Sexo")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("INSUDE.Sexo")]
    public sealed class SexoRow : Row<SexoRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Sexo"), Column("codsexo"), Size(1), PrimaryKey, IdProperty, QuickSearch, NameProperty]
        public String Codsexo
        {
            get => fields.Codsexo[this];
            set => fields.Codsexo[this] = value;
        }

        [DisplayName("Descripcion"), Column("nomsexo"), Size(20)]
        public String Nomsexo
        {
            get => fields.Nomsexo[this];
            set => fields.Nomsexo[this] = value;
        }

        public SexoRow()
            : base()
        {
        }

        public SexoRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Codsexo;
            public StringField Nomsexo;
        }
    }
}
