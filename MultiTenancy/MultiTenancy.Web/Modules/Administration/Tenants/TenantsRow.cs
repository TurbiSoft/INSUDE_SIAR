/***********************************************************************
 * Maestro de empresas/sucursales en una BD general
 * *********************************************************************/

using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MultiTenancy.Administration.Entities
{
    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Tenants]")]
    [DisplayName("Tenants"), InstanceName("Tenants")]
    [ReadPermission("PermissionKeys:Tenants")]
    [ModifyPermission("PermissionKeys:Tenants")]
    [LookupScript("Administration.Tenant")]
    public sealed class TenantsRow : Row<TenantsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Tenant Id"), Identity, IdProperty]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Tenant Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public String TenantName
        {
            get => fields.TenantName[this];
            set => fields.TenantName[this] = value;
        }

        public TenantsRow()
            : base()
        {
        }

        public TenantsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
