using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MultiTenancy.Administration.Columns
{
    [ColumnsScript("Administration.Tenants")]
    [BasedOnRow(typeof(Entities.TenantsRow), CheckNames = true)]
    public class TenantsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TenantId { get; set; }
        [EditLink]
        public String TenantName { get; set; }
    }
}