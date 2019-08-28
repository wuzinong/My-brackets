using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CoreCMS.Controllers
{
    public class AdminController : Controller
    {
        [Route("secret/[controller]/login")]
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View();
        }

        [Route("secret/[controller]/list")]
        [HttpGet]
        public async Task<IActionResult> List()
        {
            return View();
        }
    }
}
