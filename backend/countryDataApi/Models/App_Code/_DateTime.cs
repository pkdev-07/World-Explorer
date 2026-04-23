//using System;
//using System.Collections.Generic;
//using System.Globalization;

//namespace countryDataApi.Models.App_Code
//{
//  public class _DateTime
//  {
//        private static readonly List<string> DateFormatsToTry = new List<string>
//  {
//      "yyyy-MM-dd HH:mm:ss",
//      "yyyy-M-d HH:mm:ss",
//      "yyyy.MM.dd HH:mm:ss",
//      "yyyy.MM.dd. HH:mm:ss",
//      "yyyy/MM/dd HH:mm:ss",
//      "yyyy. M. d HH:mm:ss",
//      "yyyy.M.d HH:mm:ss",
//      "yyyy.d.M HH:mm:ss",
//      "yyyy/M/d HH:mm:ss",
//      "yyyy-MM-dd",
//      "yyyy-M-d",
//      "yyyy.MM.dd",
//      "yyyy.MM.dd.",
//      "yyyy/MM/dd",
//      "yyyy. M. d",
//      "yyyy.M.d",
//      "yyyy.d.M",
//      "yyyy/M/d",
//      "dd/MM/yyyy",
//      "d/MM/yyyy",
//      "dd.MM.yyyy",
//      "d.M.yyyy",
//      "dd-MM-yyyy",
//      "d.MM.yyyy",
//      "d/M/yyyy",
//      "dd.MM.yyyy.",
//      "d.M.yyyy.",
//      "d-M-yyyy",
//      "d-M-yy",
//      "d.M.yy",
//      "dd-MM-yy",
//      "dd/MM/yyyy HH:mm:ss",
//      "d/MM/yyyy HH:mm:ss",
//      "dd.MM.yyyy HH:mm:ss",
//      "d.M.yyyy HH:mm:ss",
//      "dd-MM-yyyy HH:mm:ss",
//      "d.MM.yyyy HH:mm:ss",
//      "d/M/yyyy HH:mm:ss",
//      "dd.MM.yyyy. HH:mm:ss",
//      "d.M.yyyy. HH:mm:ss",
//      "d-M-yyyy HH:mm:ss",
//      "d-M-yy HH:mm:ss",
//      "d.M.yy HH:mm:ss",
//      "dd-MM-yy  HH:mm:ss",
//      "dd-MM-yyyy hh.mm.ss",
//      "dd-MM-yyyy HH:mm:ss tt",
//      "dd-MM-yyyy hh.mm.ss tt",
//      "M/d/yyyy HH:mm:ss",
//      "MM/dd/yyyy HH:mm:ss",
//      "MM-dd-yyyy HH:mm:ss",

//      "M/d/yyyy",
//      "MM-dd-yyyy",
//      "MM/dd/yyyy"
//      // Add more formats as needed
//  };
//        public static bool TryParseDate(string dateString, out DateTime parsedDate)
//    {
//      foreach (string format in DateFormatsToTry)
//      {
//        if (DateTime.TryParseExact(
//            dateString,
//            format,
//            CultureInfo.InvariantCulture,
//            DateTimeStyles.None,
//            out parsedDate))
//        {
//          return true; // Return true if a valid format is found
//        }
//      }

//      parsedDate = System.DateTime.Now;
//      return false; // Return false if parsing fails for all formats
//    }
//  }
//}
