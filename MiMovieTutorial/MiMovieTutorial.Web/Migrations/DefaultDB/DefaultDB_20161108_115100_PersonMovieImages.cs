using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;


namespace MiMovieTutorial.Migrations.DefaultDB
{
    [Migration(20161108115100)]
    public class DefaultDB_20161108_115100_MovieTable : Migration
    {
         // Altera tablas para agregar Imagen Principal, y Galeria de Imagenes
           public override void Up()
        {
            Alter.Table("Person").InSchema("dbo")
                .AddColumn("PrimaryImage").AsString(100).Nullable()
                .AddColumn("GalleryImages").AsString(int.MaxValue).Nullable();

            Alter.Table("Movie").InSchema("dbo")
                .AddColumn("PrimaryImage").AsString(100).Nullable()
                .AddColumn("GalleryImages").AsString(int.MaxValue).Nullable();
        }
    
        public override void Down()
        {

        }

    }
}
