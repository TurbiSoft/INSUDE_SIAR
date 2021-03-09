using Serenity.Services;
using System;

namespace MultiTenancy.BasicSamples
{
    public class CustomerGrossSalesListRequest : ListRequest
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}