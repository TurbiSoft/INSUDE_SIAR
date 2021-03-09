using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MultiTenancy.Administration.Forms
{
    [FormScript("Administration.Tenants")]
    [BasedOnRow(typeof(Entities.TenantsRow), CheckNames = true)]
    public class TenantsForm
    {
        public String TenantName { get; set; }
    }
}