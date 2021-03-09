﻿using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MiMovieTutorial.Northwind.Pages
{
    [PageAuthorize(typeof(Entities.OrderRow))]
    public class OrderController : Controller
    {
        [Route("Northwind/Order")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Order.OrderIndex);
        }
    }
}
