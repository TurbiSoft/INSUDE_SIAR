using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;


namespace MiMovieTutorial.Migrations.DefaultDB
{
    [Migration(20161103115100)]
    public class DefaultDB_20161103_115100_MovieTable : Migration
    {
        public override void Up()
        {
            Alter.Table("Movie")
                .AddColumn("Kind").AsInt32().NotNullable()
                    .WithDefaultValue(1);
        }
        public override void Down()
        {
        }
    }
}
