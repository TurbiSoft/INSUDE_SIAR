using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("Campusdata"), Module("INSUDE"), TableName("[dbo].[TipoCalificación]")]
    [DisplayName("Tipo De Calificacion"), InstanceName("Tipo De Calificacion")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TipoDeCalificacionRow : Row<TipoDeCalificacionRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Tipo Calificacion"), Column("IDTipoCalificacion"), Identity, IdProperty]
        public Int32? IdTipoCalificacion
        {
            get => fields.IdTipoCalificacion[this];
            set => fields.IdTipoCalificacion[this] = value;
        }

        [DisplayName("Nombre"), Size(150), NotNull, QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
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

        public TipoDeCalificacionRow()
            : base()
        {
        }

        public TipoDeCalificacionRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTipoCalificacion;
            public StringField Nombre;
            public DateTimeField CreateDate;
            public StringField CreateUser;
        }
    }
}
