using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Infrastructure.Controllers
{
    public class ApiController : Controller
    {
        public class Profile
        {
            [JsonProperty("userName")]
            public string UserName { get; set; }

            [JsonProperty("email")]
            public string Email { get; set; }

            [JsonProperty("firstName")]
            public string FirstName { get; set; }

            [JsonProperty("lastName")]
            public string LastName { get; set; }

            [JsonProperty("displayName")]
            public string DisplayName { get; set; }

            [JsonProperty("country")]
            public string Country { get; set; }

            [JsonProperty("language")]
            public string Language { get; set; }

            [JsonProperty("mobile")]
            public string Mobile { get; set; }
        }

        private static Profile testProfile = new Profile
        {
            UserName = "testUser",
            Email = "test@xxx.com",
            FirstName = "aaa",
            LastName = "bbb",
            DisplayName = "test user",
            Country = "China",
            Language = "English",
            Mobile = "13333333333"
        };
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

        //[HttpPost]
        //public ActionResult MyUpdateMock([FromBody]Profile profile)
        //{
        //    testProfile.FirstName = profile.FirstName;
        //    testProfile.LastName = profile.LastName;
        //    testProfile.UserName = profile.UserName;
        //    testProfile.Language = profile.Language;
        //    testProfile.Mobile = profile.Mobile;
        //    testProfile.Country = profile.Country;
        //    testProfile.DisplayName = profile.DisplayName;

        //    return Ok(new ReturenObject
        //    {
        //        status = 1,
        //        msg = "You've successfully updated your information!",
        //        payload = profile
        //    });
        //}
    }
}