using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize]
        [Route("secret/[controller]/list")]
        [HttpGet]
        public async Task<IActionResult> List()
        {
            return View();
        }

        [Route("secret/[controller]/login")]
        [HttpPost]
        public async Task<IActionResult> Login(string userName,string password,string returnUrl)
        {
            if (userName.Equals("admin") && password.Equals("12321"))
            {
                var claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.Name, "MyUser"));
                claims.Add(new Claim(ClaimTypes.NameIdentifier, "MyUserID"));
                claims.Add(new Claim(ClaimTypes.Role, "MyRole"));


                var identity = new ClaimsIdentity(claims, "CustomApiKeyAuth");

                identity.AddClaim(new Claim(ClaimTypes.Name, "admin"));
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,new ClaimsPrincipal(identity));

                //var principal = new ClaimsPrincipal(new[] { claimsIdentity });
                //Thread.CurrentPrincipal = principal;
                //HttpContext.Current.User = principal;
                return Content("1");
            }

           return Content("0");
        }

        [Route("secret/[controller]/logout")]
        [HttpPost]
        public async Task<IActionResult> Logout(string returnUrl)
        {

            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            return Content("2");
        }
    }
}
