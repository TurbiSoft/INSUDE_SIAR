using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;


namespace MiMovieTutorial.Migrations.DefaultDB
{
    [Migration(20161104115100)]
    public class DefaultDB_20161104_115100_MovieTable : Migration
    {
        public override void Up()
        {
            Create.Table("Genre")
                .WithColumn("GenreId").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("Name").AsString(100).NotNullable();

            Alter.Table("Movie")
                .AddColumn("GenreId").AsInt32().Nullable()
                    .ForeignKey("FK_Movie_GenreId", "dbo", "Genre", "GenreId");
        }
        public override void Down()
        {
        }
    }
}
