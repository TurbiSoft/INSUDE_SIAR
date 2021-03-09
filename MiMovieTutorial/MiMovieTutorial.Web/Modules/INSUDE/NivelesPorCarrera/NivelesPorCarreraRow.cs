using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[TituloNivel]")]
    [DisplayName("Niveles Por Carrera"), InstanceName("Niveles Por Carrera")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class NivelesPorCarreraRow : Row<NivelesPorCarreraRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Titulo Nivel"), Column("IDTituloNivel"), Identity, IdProperty]
        public Int32? IdTituloNivel
        {
            get => fields.IdTituloNivel[this];
            set => fields.IdTituloNivel[this] = value;
        }

        [DisplayName("Id Titulo"), Column("IDTitulo"), NotNull, ForeignKey("[dbo].[Titulos]", "IDTitulo"), LeftJoin("jIdTitulo"), TextualField("IdTituloCodigo")]
        public Int32? IdTitulo
        {
            get => fields.IdTitulo[this];
            set => fields.IdTitulo[this] = value;
        }

        [DisplayName("Nombre"), Size(50), NotNull, QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Orden"), NotNull]
        public Int16? Orden
        {
            get => fields.Orden[this];
            set => fields.Orden[this] = value;
        }

        [DisplayName("Id Tipo Calificacion"), Column("IDTipoCalificacion"), NotNull, ForeignKey("[dbo].[TipoCalificación]", "IDTipoCalificacion"), LeftJoin("jIdTipoCalificacion"), TextualField("IdTipoCalificacionNombre")]
        public Int32? IdTipoCalificacion
        {
            get => fields.IdTipoCalificacion[this];
            set => fields.IdTipoCalificacion[this] = value;
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

        [DisplayName("Id Tipo Calificacion Nombre"), Expression("jIdTipoCalificacion.[Nombre]")]
        public String IdTipoCalificacionNombre
        {
            get => fields.IdTipoCalificacionNombre[this];
            set => fields.IdTipoCalificacionNombre[this] = value;
        }

        [DisplayName("Id Tipo Calificacion Create Date"), Expression("jIdTipoCalificacion.[CreateDate]")]
        public DateTime? IdTipoCalificacionCreateDate
        {
            get => fields.IdTipoCalificacionCreateDate[this];
            set => fields.IdTipoCalificacionCreateDate[this] = value;
        }

        [DisplayName("Id Tipo Calificacion Create User"), Expression("jIdTipoCalificacion.[CreateUser]")]
        public String IdTipoCalificacionCreateUser
        {
            get => fields.IdTipoCalificacionCreateUser[this];
            set => fields.IdTipoCalificacionCreateUser[this] = value;
        }

        public NivelesPorCarreraRow()
            : base()
        {
        }

        public NivelesPorCarreraRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTituloNivel;
            public Int32Field IdTitulo;
            public StringField Nombre;
            public Int16Field Orden;
            public Int32Field IdTipoCalificacion;
            public DateTimeField CreateDate;
            public StringField CreateUser;

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

            public StringField IdTipoCalificacionNombre;
            public DateTimeField IdTipoCalificacionCreateDate;
            public StringField IdTipoCalificacionCreateUser;
        }
    }
}
