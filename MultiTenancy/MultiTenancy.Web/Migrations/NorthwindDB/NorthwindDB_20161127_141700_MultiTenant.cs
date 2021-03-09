/**************************************************************
 * 06-03-2021 Agrega el campo para identificar empresa/sucursal
 * en cada tabla
 * ************************************************************/

using FluentMigrator;
using MultiTenancy.Northwind.Entities;
using Serenity.Data;
using System;

namespace MultiTenancy.Migrations.NorthwindDB
{
    [Migration(20161127141700)]
    public class NorthwindDB_20161127_141700_ForwardDates : Migration
    {
        public override void Up()
        {
            Alter.Table("Employees")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Categories")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Customers")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Shippers")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Suppliers")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Orders")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Products")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Region")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Territories")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);
        }
    
    public override void Down()
        {
        }
    }
}