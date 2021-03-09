using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("Campusdata"), Module("INSUDE"), TableName("[dbo].[Promociones]")]
    [DisplayName("Promociones"), InstanceName("Promociones")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PromocionesRow : Row<PromocionesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Promocion"), Column("IDPromocion"), Identity, IdProperty]
        public Int32? IdPromocion
        {
            get => fields.IdPromocion[this];
            set => fields.IdPromocion[this] = value;
        }

        [DisplayName("Id Titulo"), Column("IDTitulo"), ForeignKey("[dbo].[Titulos]", "IDTitulo"), LeftJoin("jIdTitulo"), TextualField("IdTituloCodigo")]
        public Int32? IdTitulo
        {
            get => fields.IdTitulo[this];
            set => fields.IdTitulo[this] = value;
        }

        [DisplayName("Descripcion"), Size(50), QuickSearch, NameProperty]
        public String Descripcion
        {
            get => fields.Descripcion[this];
            set => fields.Descripcion[this] = value;
        }

        [DisplayName("Year Inicio")]
        public Int32? YearInicio
        {
            get => fields.YearInicio[this];
            set => fields.YearInicio[this] = value;
        }

        [DisplayName("Year Fin")]
        public Int32? YearFin
        {
            get => fields.YearFin[this];
            set => fields.YearFin[this] = value;
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

        [DisplayName("Last Updated At")]
        public DateTime? LastUpdatedAt
        {
            get => fields.LastUpdatedAt[this];
            set => fields.LastUpdatedAt[this] = value;
        }

        [DisplayName("Id Titulo Codigo"), Expression("jIdTitulo.[Codigo]")]
        public String IdTituloCodigo
        {
            get => fields.IdTituloCodigo[this];
            set => fields.IdTituloCodigo[this] = value;
        }

        [DisplayName("Id Titulo Nombre"), Expression("jIdTitulo.[Nombre]")]
        public String IdTituloNombre
        {
            get => fields.IdTituloNombre[this];
            set => fields.IdTituloNombre[this] = value;
        }

        [DisplayName("Id Titulo Mencion"), Expression("jIdTitulo.[Mencion]")]
        public String IdTituloMencion
        {
            get => fields.IdTituloMencion[this];
            set => fields.IdTituloMencion[this] = value;
        }

        [DisplayName("Id Titulo Id Escuela"), Expression("jIdTitulo.[IDEscuela]")]
        public Int32? IdTituloIdEscuela
        {
            get => fields.IdTituloIdEscuela[this];
            set => fields.IdTituloIdEscuela[this] = value;
        }

        [DisplayName("Id Titulo Id Pensum"), Expression("jIdTitulo.[IDPensum]")]
        public Int32? IdTituloIdPensum
        {
            get => fields.IdTituloIdPensum[this];
            set => fields.IdTituloIdPensum[this] = value;
        }

        [DisplayName("Id Titulo Monto Inscripcion"), Expression("jIdTitulo.[MontoInscripcion]")]
        public Decimal? IdTituloMontoInscripcion
        {
            get => fields.IdTituloMontoInscripcion[this];
            set => fields.IdTituloMontoInscripcion[this] = value;
        }

        [DisplayName("Id Titulo Costo"), Expression("jIdTitulo.[Costo]")]
        public Decimal? IdTituloCosto
        {
            get => fields.IdTituloCosto[this];
            set => fields.IdTituloCosto[this] = value;
        }

        [DisplayName("Id Titulo Costo Credito"), Expression("jIdTitulo.[CostoCredito]")]
        public Boolean? IdTituloCostoCredito
        {
            get => fields.IdTituloCostoCredito[this];
            set => fields.IdTituloCostoCredito[this] = value;
        }

        [DisplayName("Id Titulo Titulo Otorgado"), Expression("jIdTitulo.[TituloOtorgado]")]
        public String IdTituloTituloOtorgado
        {
            get => fields.IdTituloTituloOtorgado[this];
            set => fields.IdTituloTituloOtorgado[this] = value;
        }

        [DisplayName("Id Titulo Id Requisito Nacional"), Expression("jIdTitulo.[IDRequisitoNacional]")]
        public Int32? IdTituloIdRequisitoNacional
        {
            get => fields.IdTituloIdRequisitoNacional[this];
            set => fields.IdTituloIdRequisitoNacional[this] = value;
        }

        [DisplayName("Id Titulo Id Requisito Extrangero"), Expression("jIdTitulo.[IDRequisitoExtrangero]")]
        public Int32? IdTituloIdRequisitoExtrangero
        {
            get => fields.IdTituloIdRequisitoExtrangero[this];
            set => fields.IdTituloIdRequisitoExtrangero[this] = value;
        }

        [DisplayName("Id Titulo Tipo Matricula"), Expression("jIdTitulo.[TipoMatricula]")]
        public String IdTituloTipoMatricula
        {
            get => fields.IdTituloTipoMatricula[this];
            set => fields.IdTituloTipoMatricula[this] = value;
        }

        [DisplayName("Id Titulo Estado"), Expression("jIdTitulo.[Estado]")]
        public String IdTituloEstado
        {
            get => fields.IdTituloEstado[this];
            set => fields.IdTituloEstado[this] = value;
        }

        [DisplayName("Id Titulo Create Date"), Expression("jIdTitulo.[CreateDate]")]
        public DateTime? IdTituloCreateDate
        {
            get => fields.IdTituloCreateDate[this];
            set => fields.IdTituloCreateDate[this] = value;
        }

        [DisplayName("Id Titulo Create User"), Expression("jIdTitulo.[CreateUser]")]
        public String IdTituloCreateUser
        {
            get => fields.IdTituloCreateUser[this];
            set => fields.IdTituloCreateUser[this] = value;
        }

        [DisplayName("Id Titulo Ciclo Academico"), Expression("jIdTitulo.[CicloAcademico]")]
        public String IdTituloCicloAcademico
        {
            get => fields.IdTituloCicloAcademico[this];
            set => fields.IdTituloCicloAcademico[this] = value;
        }

        public PromocionesRow()
            : base()
        {
        }

        public PromocionesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPromocion;
            public Int32Field IdTitulo;
            public StringField Descripcion;
            public Int32Field YearInicio;
            public Int32Field YearFin;
            public StringField Estado;
            public DateTimeField CreateDate;
            public DateTimeField LastUpdatedAt;

            public StringField IdTituloCodigo;
            public StringField IdTituloNombre;
            public StringField IdTituloMencion;
            public Int32Field IdTituloIdEscuela;
            public Int32Field IdTituloIdPensum;
            public DecimalField IdTituloMontoInscripcion;
            public DecimalField IdTituloCosto;
            public BooleanField IdTituloCostoCredito;
            public StringField IdTituloTituloOtorgado;
            public Int32Field IdTituloIdRequisitoNacional;
            public Int32Field IdTituloIdRequisitoExtrangero;
            public StringField IdTituloTipoMatricula;
            public StringField IdTituloEstado;
            public DateTimeField IdTituloCreateDate;
            public StringField IdTituloCreateUser;
            public StringField IdTituloCicloAcademico;
        }
    }
}
