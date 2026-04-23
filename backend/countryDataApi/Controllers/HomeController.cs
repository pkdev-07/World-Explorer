using countryDataApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Newtonsoft.Json;

namespace countryDataApi.Controllers
{
    [Route("api/")]
    [ApiController]
    public class HomeController : Controller
    {

        [HttpPost("PostCountries")] 
        public IActionResult PostCountries([FromBody] Class obj)
        {
            try
            {
                DataTable dt = obj.PostCountry(obj);

                if (dt != null && dt.Rows.Count > 0)
                {
                    return Ok(new { message = "meassage posted successfully!" });
                }
                else
                {
                    return BadRequest(new { message = "Failed to add message." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Internal Server Error", error = ex.Message });
            }
        }


        //[HttpGet("Get_Country")]
        //public IActionResult GetCountries()
        //{
        //    try
        //    {
        //        Class country = new Class();
        //        DataTable dt = country.Get_Country();

        //        var list = dt.AsEnumerable().Select(row => new
        //        {
        //            name = row["name"]?.ToString(),
        //            official_name = row["official_name"]?.ToString(),
        //            population = Convert.ToInt64(row["population"]),
        //            region = row["region"]?.ToString(),
        //            subregion = row["subregion"]?.ToString(),
        //            capital = row["capital"]?.ToString(),
        //            languages = row["languages"]?.ToString(),
        //            currencies = row["currencies"]?.ToString(),
        //            area = Convert.ToDouble(row["area"]),
        //            continents = row["continents"]?.ToString(),
        //            flags = row["flags"]?.ToString(),
        //            coat_of_arms = row["coat_of_arms"]?.ToString(),
        //            maps = row["maps"]?.ToString(),
        //            borders = row["borders"]?.ToString(),
        //            cca3 = row["cca3"]?.ToString()
        //        }).ToList();

        //        return Ok(list); // ✅ THIS is the fix
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, new { message = "Error", details = ex.Message });
        //    }
        //}


        [HttpGet("Get_Country")]
        public IActionResult GetCountries()
        {
            try
            {
                Class country = new Class();

                DataTable dt = country.Get_Country();

                string jsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(dt);
                //string jsonResult = JsonConvert.SerializeObject(dt);

                return Ok(jsonResult);

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error", details = ex.Message });
            }

        }
    }
}