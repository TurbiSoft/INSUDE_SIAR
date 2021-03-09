using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[Dependencias]")]
    [DisplayName("Dependencias"), InstanceName("Dependencias")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    // [LookupEditor(typeof(INSUDE.Dependencias)]
    [LookupScript("INSUDE.Dependencias")]
    public sealed class DependenciasRow : Row<DependenciasRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Dependencia"), Column("IDDependencia"), Identity, IdProperty]
        public Int32? IdDependencia
        {
            get => fields.IdDependencia[this];
            set => fields.IdDependencia[this] = value;
        }

        [DisplayName("Nombre"), Size(200), NotNull, QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        public DependenciasRow()
            : base()
        {
        }

        public DependenciasRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDependencia;
            public StringField Nombre;
        }
    }
}
