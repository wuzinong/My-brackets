using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Infrastructure.Controllers
{
    public class ApiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult GetList()
        {
            string[] str = new string[] { "test1", "test2" };

            return Json(str);
        }
    }
}