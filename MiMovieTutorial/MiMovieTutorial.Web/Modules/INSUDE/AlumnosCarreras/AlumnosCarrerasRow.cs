using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MiMovieTutorial.INSUDE.Entities
{
    [ConnectionKey("campusdata"), Module("INSUDE"), TableName("[dbo].[AlumnosCarreras]")]
    [DisplayName("Alumnos Carreras"), InstanceName("Alumnos Carreras")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AlumnosCarrerasRow : Row<AlumnosCarrerasRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Alumno Carrera"), Column("IDAlumnoCarrera"), Identity, IdProperty]
        public Int32? IdAlumnoCarrera
        {
            get => fields.IdAlumnoCarrera[this];
            set => fields.IdAlumnoCarrera[this] = value;
        }

        [DisplayName("Id Alumno"), Column("IDAlumno"), NotNull, ForeignKey("[dbo].[Alumnos]", "IDAlumno"), LeftJoin("jIdAlumno"), TextualField("IdAlumnoNombres")]
        public Int32? IdAlumno
        {
            get => fields.IdAlumno[this];
            set => fields.IdAlumno[this] = value;
        }

        [DisplayName("Id Titulo"), Column("IDTitulo"), NotNull, ForeignKey("[dbo].[Titulos]", "IDTitulo"), LeftJoin("jIdTitulo"), TextualField("IdTituloCodigo")]
        public Int32? IdTitulo
        {
            get => fields.IdTitulo[this];
            set => fields.IdTitulo[this] = value;
        }

        [DisplayName("Id Pensum"), Column("IDPensum"), NotNull, ForeignKey("[dbo].[Pensum]", "IDPensum"), LeftJoin("jIdPensum"), TextualField("IdPensumCodigo")]
        public Int32? IdPensum
        {
            get => fields.IdPensum[this];
            set => fields.IdPensum[this] = value;
        }

        [DisplayName("Id Titulo Nivel"), Column("IDTituloNivel"), NotNull]
        public Int32? IdTituloNivel
        {
            get => fields.IdTituloNivel[this];
            set => fields.IdTituloNivel[this] = value;
        }

        [DisplayName("No Registro"), Size(60), QuickSearch, NameProperty]
        public String NoRegistro
        {
            get => fields.NoRegistro[this];
            set => fields.NoRegistro[this] = value;
        }

        [DisplayName("Fecha"), NotNull]
        public DateTime? Fecha
        {
            get => fields.Fecha[this];
            set => fields.Fecha[this] = value;
        }

        [DisplayName("Becado"), Size(20), NotNull]
        public String Becado
        {
            get => fields.Becado[this];
            set => fields.Becado[this] = value;
        }

        [DisplayName("Fecha Graduacion")]
        public DateTime? FechaGraduacion
        {
            get => fields.FechaGraduacion[this];
            set => fields.FechaGraduacion[this] = value;
        }

        [DisplayName("Id Promocion"), ForeignKey("[dbo].[Promociones]", "IDPromocion"), LeftJoin("jIdPromocion"), TextualField("IdPromocionDescripcion")]
        public Int32? IdPromocion
        {
            get => fields.IdPromocion[this];
            set => fields.IdPromocion[this] = value;
        }

        [DisplayName("Promocion"), Size(60)]
        public String Promocion
        {
            get => fields.Promocion[this];
            set => fields.Promocion[this] = value;
        }

        [DisplayName("Libro")]
        public Int32? Libro
        {
            get => fields.Libro[this];
            set => fields.Libro[this] = value;
        }

        [DisplayName("Folio")]
        public Int32? Folio
        {
            get => fields.Folio[this];
            set => fields.Folio[this] = value;
        }

        [DisplayName("Numero")]
        public Int32? Numero
        {
            get => fields.Numero[this];
            set => fields.Numero[this] = value;
        }

        [DisplayName("Estado"), Size(20)]
        public String Estado
        {
            get => fields.Estado[this];
            set => fields.Estado[this] = value;
        }

        [DisplayName("Create Date"), NotNull]
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

        [DisplayName("Id Alumno Nombres"), Expression("jIdAlumno.[Nombres]")]
        public String IdAlumnoNombres
        {
            get => fields.IdAlumnoNombres[this];
            set => fields.IdAlumnoNombres[this] = value;
        }

        [DisplayName("Id Alumno Apellidos"), Expression("jIdAlumno.[Apellidos]")]
        public String IdAlumnoApellidos
        {
            get => fields.IdAlumnoApellidos[this];
            set => fields.IdAlumnoApellidos[this] = value;
        }

        [DisplayName("Id Alumno Sexo"), Expression("jIdAlumno.[Sexo]")]
        public String IdAlumnoSexo
        {
            get => fields.IdAlumnoSexo[this];
            set => fields.IdAlumnoSexo[this] = value;
        }

        [DisplayName("Id Alumno Matricula"), Expression("jIdAlumno.[Matricula]")]
        public String IdAlumnoMatricula
        {
            get => fields.IdAlumnoMatricula[this];
            set => fields.IdAlumnoMatricula[this] = value;
        }

        [DisplayName("Id Alumno Fecha Nacimiento"), Expression("jIdAlumno.[FechaNacimiento]")]
        public DateTime? IdAlumnoFechaNacimiento
        {
            get => fields.IdAlumnoFechaNacimiento[this];
            set => fields.IdAlumnoFechaNacimiento[this] = value;
        }

        [DisplayName("Id Alumno Lugar Nacimiento"), Expression("jIdAlumno.[LugarNacimiento]")]
        public String IdAlumnoLugarNacimiento
        {
            get => fields.IdAlumnoLugarNacimiento[this];
            set => fields.IdAlumnoLugarNacimiento[this] = value;
        }

        [DisplayName("Id Alumno Fecha Registro"), Expression("jIdAlumno.[FechaRegistro]")]
        public DateTime? IdAlumnoFechaRegistro
        {
            get => fields.IdAlumnoFechaRegistro[this];
            set => fields.IdAlumnoFechaRegistro[this] = value;
        }

        [DisplayName("Id Alumno Fecha Ingreso"), Expression("jIdAlumno.[FechaIngreso]")]
        public DateTime? IdAlumnoFechaIngreso
        {
            get => fields.IdAlumnoFechaIngreso[this];
            set => fields.IdAlumnoFechaIngreso[this] = value;
        }

        [DisplayName("Id Alumno Tipo Identificacion"), Expression("jIdAlumno.[TipoIdentificacion]")]
        public String IdAlumnoTipoIdentificacion
        {
            get => fields.IdAlumnoTipoIdentificacion[this];
            set => fields.IdAlumnoTipoIdentificacion[this] = value;
        }

        [DisplayName("Id Alumno Identificacion"), Expression("jIdAlumno.[Identificacion]")]
        public String IdAlumnoIdentificacion
        {
            get => fields.IdAlumnoIdentificacion[this];
            set => fields.IdAlumnoIdentificacion[this] = value;
        }

        [DisplayName("Id Alumno Estado Civil"), Expression("jIdAlumno.[EstadoCivil]")]
        public Int32? IdAlumnoEstadoCivil
        {
            get => fields.IdAlumnoEstadoCivil[this];
            set => fields.IdAlumnoEstadoCivil[this] = value;
        }

        [DisplayName("Id Alumno Correo Electronico"), Expression("jIdAlumno.[CorreoElectronico]")]
        public String IdAlumnoCorreoElectronico
        {
            get => fields.IdAlumnoCorreoElectronico[this];
            set => fields.IdAlumnoCorreoElectronico[this] = value;
        }

        [DisplayName("Id Alumno Tel Hogar"), Expression("jIdAlumno.[TelHogar]")]
        public String IdAlumnoTelHogar
        {
            get => fields.IdAlumnoTelHogar[this];
            set => fields.IdAlumnoTelHogar[this] = value;
        }

        [DisplayName("Id Alumno Tel Celular"), Expression("jIdAlumno.[TelCelular]")]
        public String IdAlumnoTelCelular
        {
            get => fields.IdAlumnoTelCelular[this];
            set => fields.IdAlumnoTelCelular[this] = value;
        }

        [DisplayName("Id Alumno Observaciones"), Expression("jIdAlumno.[Observaciones]")]
        public String IdAlumnoObservaciones
        {
            get => fields.IdAlumnoObservaciones[this];
            set => fields.IdAlumnoObservaciones[this] = value;
        }

        [DisplayName("Id Alumno Tipo"), Expression("jIdAlumno.[Tipo]")]
        public String IdAlumnoTipo
        {
            get => fields.IdAlumnoTipo[this];
            set => fields.IdAlumnoTipo[this] = value;
        }

        [DisplayName("Id Alumno Direccion"), Expression("jIdAlumno.[Direccion]")]
        public String IdAlumnoDireccion
        {
            get => fields.IdAlumnoDireccion[this];
            set => fields.IdAlumnoDireccion[this] = value;
        }

        [DisplayName("Id Alumno Ciudad"), Expression("jIdAlumno.[Ciudad]")]
        public String IdAlumnoCiudad
        {
            get => fields.IdAlumnoCiudad[this];
            set => fields.IdAlumnoCiudad[this] = value;
        }

        [DisplayName("Id Alumno Id Pais"), Expression("jIdAlumno.[IDPais]")]
        public Int32? IdAlumnoIdPais
        {
            get => fields.IdAlumnoIdPais[this];
            set => fields.IdAlumnoIdPais[this] = value;
        }

        [DisplayName("Id Alumno Id Nacionalidad"), Expression("jIdAlumno.[IDNacionalidad]")]
        public Int32? IdAlumnoIdNacionalidad
        {
            get => fields.IdAlumnoIdNacionalidad[this];
            set => fields.IdAlumnoIdNacionalidad[this] = value;
        }

        [DisplayName("Id Alumno Id Usuario"), Expression("jIdAlumno.[IDUsuario]")]
        public Int32? IdAlumnoIdUsuario
        {
            get => fields.IdAlumnoIdUsuario[this];
            set => fields.IdAlumnoIdUsuario[this] = value;
        }

        [DisplayName("Id Alumno Direccion Oficina"), Expression("jIdAlumno.[DireccionOficina]")]
        public String IdAlumnoDireccionOficina
        {
            get => fields.IdAlumnoDireccionOficina[this];
            set => fields.IdAlumnoDireccionOficina[this] = value;
        }

        [DisplayName("Id Alumno Funcion"), Expression("jIdAlumno.[Funcion]")]
        public String IdAlumnoFuncion
        {
            get => fields.IdAlumnoFuncion[this];
            set => fields.IdAlumnoFuncion[this] = value;
        }

        [DisplayName("Id Alumno Id Institucion"), Expression("jIdAlumno.[IDInstitucion]")]
        public Int32? IdAlumnoIdInstitucion
        {
            get => fields.IdAlumnoIdInstitucion[this];
            set => fields.IdAlumnoIdInstitucion[this] = value;
        }

        [DisplayName("Id Alumno Id Rango"), Expression("jIdAlumno.[IDRango]")]
        public Int32? IdAlumnoIdRango
        {
            get => fields.IdAlumnoIdRango[this];
            set => fields.IdAlumnoIdRango[this] = value;
        }

        [DisplayName("Id Alumno Id Dependencia"), Expression("jIdAlumno.[IDDependencia]")]
        public Int32? IdAlumnoIdDependencia
        {
            get => fields.IdAlumnoIdDependencia[this];
            set => fields.IdAlumnoIdDependencia[this] = value;
        }

        [DisplayName("Id Alumno Tel Oficina"), Expression("jIdAlumno.[TelOficina]")]
        public String IdAlumnoTelOficina
        {
            get => fields.IdAlumnoTelOficina[this];
            set => fields.IdAlumnoTelOficina[this] = value;
        }

        [DisplayName("Id Alumno Dp Matricula"), Expression("jIdAlumno.[DPMatricula]")]
        public String IdAlumnoDpMatricula
        {
            get => fields.IdAlumnoDpMatricula[this];
            set => fields.IdAlumnoDpMatricula[this] = value;
        }

        [DisplayName("Id Alumno Ec Matricula"), Expression("jIdAlumno.[ECMatricula]")]
        public String IdAlumnoEcMatricula
        {
            get => fields.IdAlumnoEcMatricula[this];
            set => fields.IdAlumnoEcMatricula[this] = value;
        }

        [DisplayName("Id Alumno Estado"), Expression("jIdAlumno.[Estado]")]
        public String IdAlumnoEstado
        {
            get => fields.IdAlumnoEstado[this];
            set => fields.IdAlumnoEstado[this] = value;
        }

        [DisplayName("Id Alumno Create Date"), Expression("jIdAlumno.[CreateDate]")]
        public DateTime? IdAlumnoCreateDate
        {
            get => fields.IdAlumnoCreateDate[this];
            set => fields.IdAlumnoCreateDate[this] = value;
        }

        [DisplayName("Id Alumno Create User"), Expression("jIdAlumno.[CreateUser]")]
        public String IdAlumnoCreateUser
        {
            get => fields.IdAlumnoCreateUser[this];
            set => fields.IdAlumnoCreateUser[this] = value;
        }

        [DisplayName("Id Alumno Last Updated At"), Expression("jIdAlumno.[LastUpdatedAt]")]
        public DateTime? IdAlumnoLastUpdatedAt
        {
            get => fields.IdAlumnoLastUpdatedAt[this];
            set => fields.IdAlumnoLastUpdatedAt[this] = value;
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

        [DisplayName("Id Pensum Id Titulo"), Expression("jIdPensum.[IDTitulo]")]
        public Int32? IdPensumIdTitulo
        {
            get => fields.IdPensumIdTitulo[this];
            set => fields.IdPensumIdTitulo[this] = value;
        }

        [DisplayName("Id Pensum Codigo"), Expression("jIdPensum.[Codigo]")]
        public String IdPensumCodigo
        {
            get => fields.IdPensumCodigo[this];
            set => fields.IdPensumCodigo[this] = value;
        }

        [DisplayName("Id Pensum Nombre"), Expression("jIdPensum.[Nombre]")]
        public String IdPensumNombre
        {
            get => fields.IdPensumNombre[this];
            set => fields.IdPensumNombre[this] = value;
        }

        [DisplayName("Id Pensum Estado"), Expression("jIdPensum.[Estado]")]
        public String IdPensumEstado
        {
            get => fields.IdPensumEstado[this];
            set => fields.IdPensumEstado[this] = value;
        }

        [DisplayName("Id Pensum Create Date"), Expression("jIdPensum.[CreateDate]")]
        public DateTime? IdPensumCreateDate
        {
            get => fields.IdPensumCreateDate[this];
            set => fields.IdPensumCreateDate[this] = value;
        }

        [DisplayName("Id Pensum Create User"), Expression("jIdPensum.[CreateUser]")]
        public String IdPensumCreateUser
        {
            get => fields.IdPensumCreateUser[this];
            set => fields.IdPensumCreateUser[this] = value;
        }

        [DisplayName("Id Pensum Last Updated At"), Expression("jIdPensum.[LastUpdatedAt]")]
        public DateTime? IdPensumLastUpdatedAt
        {
            get => fields.IdPensumLastUpdatedAt[this];
            set => fields.IdPensumLastUpdatedAt[this] = value;
        }

        [DisplayName("Id Promocion Id Titulo"), Expression("jIdPromocion.[IDTitulo]")]
        public Int32? IdPromocionIdTitulo
        {
            get => fields.IdPromocionIdTitulo[this];
            set => fields.IdPromocionIdTitulo[this] = value;
        }

        [DisplayName("Id Promocion Descripcion"), Expression("jIdPromocion.[Descripcion]")]
        public String IdPromocionDescripcion
        {
            get => fields.IdPromocionDescripcion[this];
            set => fields.IdPromocionDescripcion[this] = value;
        }

        [DisplayName("Id Promocion Year Inicio"), Expression("jIdPromocion.[YearInicio]")]
        public Int32? IdPromocionYearInicio
        {
            get => fields.IdPromocionYearInicio[this];
            set => fields.IdPromocionYearInicio[this] = value;
        }

        [DisplayName("Id Promocion Year Fin"), Expression("jIdPromocion.[YearFin]")]
        public Int32? IdPromocionYearFin
        {
            get => fields.IdPromocionYearFin[this];
            set => fields.IdPromocionYearFin[this] = value;
        }

        [DisplayName("Id Promocion Estado"), Expression("jIdPromocion.[Estado]")]
        public String IdPromocionEstado
        {
            get => fields.IdPromocionEstado[this];
            set => fields.IdPromocionEstado[this] = value;
        }

        [DisplayName("Id Promocion Create Date"), Expression("jIdPromocion.[CreateDate]")]
        public DateTime? IdPromocionCreateDate
        {
            get => fields.IdPromocionCreateDate[this];
            set => fields.IdPromocionCreateDate[this] = value;
        }

        [DisplayName("Id Promocion Last Updated At"), Expression("jIdPromocion.[LastUpdatedAt]")]
        public DateTime? IdPromocionLastUpdatedAt
        {
            get => fields.IdPromocionLastUpdatedAt[this];
            set => fields.IdPromocionLastUpdatedAt[this] = value;
        }

        public AlumnosCarrerasRow()
            : base()
        {
        }

        public AlumnosCarrerasRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAlumnoCarrera;
            public Int32Field IdAlumno;
            public Int32Field IdTitulo;
            public Int32Field IdPensum;
            public Int32Field IdTituloNivel;
            public StringField NoRegistro;
            public DateTimeField Fecha;
            public StringField Becado;
            public DateTimeField FechaGraduacion;
            public Int32Field IdPromocion;
            public StringField Promocion;
            public Int32Field Libro;
            public Int32Field Folio;
            public Int32Field Numero;
            public StringField Estado;
            public DateTimeField CreateDate;
            public DateTimeField LastUpdatedAt;

            public StringField IdAlumnoNombres;
            public StringField IdAlumnoApellidos;
            public StringField IdAlumnoSexo;
            public StringField IdAlumnoMatricula;
            public DateTimeField IdAlumnoFechaNacimiento;
            public StringField IdAlumnoLugarNacimiento;
            public DateTimeField IdAlumnoFechaRegistro;
            public DateTimeField IdAlumnoFechaIngreso;
            public StringField IdAlumnoTipoIdentificacion;
            public StringField IdAlumnoIdentificacion;
            public Int32Field IdAlumnoEstadoCivil;
            public StringField IdAlumnoCorreoElectronico;
            public StringField IdAlumnoTelHogar;
            public StringField IdAlumnoTelCelular;
            public StringField IdAlumnoObservaciones;
            public StringField IdAlumnoTipo;
            public StringField IdAlumnoDireccion;
            public StringField IdAlumnoCiudad;
            public Int32Field IdAlumnoIdPais;
            public Int32Field IdAlumnoIdNacionalidad;
            public Int32Field IdAlumnoIdUsuario;
            public StringField IdAlumnoDireccionOficina;
            public StringField IdAlumnoFuncion;
            public Int32Field IdAlumnoIdInstitucion;
            public Int32Field IdAlumnoIdRango;
            public Int32Field IdAlumnoIdDependencia;
            public StringField IdAlumnoTelOficina;
            public StringField IdAlumnoDpMatricula;
            public StringField IdAlumnoEcMatricula;
            public StringField IdAlumnoEstado;
            public DateTimeField IdAlumnoCreateDate;
            public StringField IdAlumnoCreateUser;
            public DateTimeField IdAlumnoLastUpdatedAt;

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

            public Int32Field IdPensumIdTitulo;
            public StringField IdPensumCodigo;
            public StringField IdPensumNombre;
            public StringField IdPensumEstado;
            public DateTimeField IdPensumCreateDate;
            public StringField IdPensumCreateUser;
            public DateTimeField IdPensumLastUpdatedAt;

            public Int32Field IdPromocionIdTitulo;
            public StringField IdPromocionDescripcion;
            public Int32Field IdPromocionYearInicio;
            public Int32Field IdPromocionYearFin;
            public StringField IdPromocionEstado;
            public DateTimeField IdPromocionCreateDate;
            public DateTimeField IdPromocionLastUpdatedAt;
        }
    }
}
