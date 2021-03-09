namespace MiMovieTutorial.INSUDE {
    export interface AlumnosFamiliaresRow {
        IdAlumnoFamiliar?: number;
        IdAlumno?: number;
        Parentesco?: string;
        Nombres?: string;
        Telefono?: string;
        CreateUser?: string;
        CreateDate?: string;
        IdAlumnoNombres?: string;
        IdAlumnoApellidos?: string;
        IdAlumnoSexo?: string;
        IdAlumnoMatricula?: string;
        IdAlumnoFechaNacimiento?: string;
        IdAlumnoLugarNacimiento?: string;
        IdAlumnoFechaRegistro?: string;
        IdAlumnoFechaIngreso?: string;
        IdAlumnoTipoIdentificacion?: string;
        IdAlumnoIdentificacion?: string;
        IdAlumnoEstadoCivil?: number;
        IdAlumnoCorreoElectronico?: string;
        IdAlumnoTelHogar?: string;
        IdAlumnoTelCelular?: string;
        IdAlumnoObservaciones?: string;
        IdAlumnoTipo?: string;
        IdAlumnoDireccion?: string;
        IdAlumnoCiudad?: string;
        IdAlumnoIdPais?: number;
        IdAlumnoIdNacionalidad?: number;
        IdAlumnoIdUsuario?: number;
        IdAlumnoDireccionOficina?: string;
        IdAlumnoFuncion?: string;
        IdAlumnoIdInstitucion?: number;
        IdAlumnoIdRango?: number;
        IdAlumnoIdDependencia?: number;
        IdAlumnoTelOficina?: string;
        IdAlumnoDpMatricula?: string;
        IdAlumnoEcMatricula?: string;
        IdAlumnoEstado?: string;
        IdAlumnoCreateDate?: string;
        IdAlumnoCreateUser?: string;
        IdAlumnoLastUpdatedAt?: string;
    }

    export namespace AlumnosFamiliaresRow {
        export const idProperty = 'IdAlumnoFamiliar';
        export const nameProperty = 'Parentesco';
        export const localTextPrefix = 'INSUDE.AlumnosFamiliares';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdAlumnoFamiliar = "IdAlumnoFamiliar",
            IdAlumno = "IdAlumno",
            Parentesco = "Parentesco",
            Nombres = "Nombres",
            Telefono = "Telefono",
            CreateUser = "CreateUser",
            CreateDate = "CreateDate",
            IdAlumnoNombres = "IdAlumnoNombres",
            IdAlumnoApellidos = "IdAlumnoApellidos",
            IdAlumnoSexo = "IdAlumnoSexo",
            IdAlumnoMatricula = "IdAlumnoMatricula",
            IdAlumnoFechaNacimiento = "IdAlumnoFechaNacimiento",
            IdAlumnoLugarNacimiento = "IdAlumnoLugarNacimiento",
            IdAlumnoFechaRegistro = "IdAlumnoFechaRegistro",
            IdAlumnoFechaIngreso = "IdAlumnoFechaIngreso",
            IdAlumnoTipoIdentificacion = "IdAlumnoTipoIdentificacion",
            IdAlumnoIdentificacion = "IdAlumnoIdentificacion",
            IdAlumnoEstadoCivil = "IdAlumnoEstadoCivil",
            IdAlumnoCorreoElectronico = "IdAlumnoCorreoElectronico",
            IdAlumnoTelHogar = "IdAlumnoTelHogar",
            IdAlumnoTelCelular = "IdAlumnoTelCelular",
            IdAlumnoObservaciones = "IdAlumnoObservaciones",
            IdAlumnoTipo = "IdAlumnoTipo",
            IdAlumnoDireccion = "IdAlumnoDireccion",
            IdAlumnoCiudad = "IdAlumnoCiudad",
            IdAlumnoIdPais = "IdAlumnoIdPais",
            IdAlumnoIdNacionalidad = "IdAlumnoIdNacionalidad",
            IdAlumnoIdUsuario = "IdAlumnoIdUsuario",
            IdAlumnoDireccionOficina = "IdAlumnoDireccionOficina",
            IdAlumnoFuncion = "IdAlumnoFuncion",
            IdAlumnoIdInstitucion = "IdAlumnoIdInstitucion",
            IdAlumnoIdRango = "IdAlumnoIdRango",
            IdAlumnoIdDependencia = "IdAlumnoIdDependencia",
            IdAlumnoTelOficina = "IdAlumnoTelOficina",
            IdAlumnoDpMatricula = "IdAlumnoDpMatricula",
            IdAlumnoEcMatricula = "IdAlumnoEcMatricula",
            IdAlumnoEstado = "IdAlumnoEstado",
            IdAlumnoCreateDate = "IdAlumnoCreateDate",
            IdAlumnoCreateUser = "IdAlumnoCreateUser",
            IdAlumnoLastUpdatedAt = "IdAlumnoLastUpdatedAt"
        }
    }
}
