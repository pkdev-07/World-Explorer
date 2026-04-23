using countryDataApi.Models.App_Code;
using System.Data;

namespace countryDataApi.Models
{
    public class Class : DataEntity
    {
        public string name { get; set; }
        public string official_name { get; set; }   
        public int population { get; set; }
        public string region { get; set; }
        public string subregion { get; set; }
        public int area { get; set; }
        public string flags { get; set; }
        public string coat_of_arms { get; set; }
        public string maps { get; set; }
        public string capital { get; set; }

        public string languages { get; set; }

        public string currencies { get; set; }

        public string continents { get; set; }

        public string borders { get; set; }
        public string cca3 { get; set; }




        public DataTable PostCountry(Class obj)
        {
            return ExecuteDataTableFN("fn_add_country_v1",obj.name,obj.official_name,obj.population, obj.region,obj.subregion,obj.area,obj.flags,obj.coat_of_arms,obj.maps,obj.capital,obj.languages,obj.currencies,obj.continents,obj.borders,obj.cca3);

        }

        public DataTable Get_Country()
        {
            return ExecuteDataSetFN("fn_select_countries").Tables[0];
        }

    }
}
