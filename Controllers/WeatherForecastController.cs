using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using kitarsh.net.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace kitarsh.net.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private const int MinTempCelsius = -20;
        private const int MaxTempCelsius = 55;
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = GetRandomNumberInRange(MinTempCelsius, MaxTempCelsius),
                Summary = Summaries[GetRandomNumberInRange(0, Summaries.Length - 1)]
            })
            .ToArray();
        }

        private static int GetRandomNumberInRange(int startIndex, int stopIndex)
        {
            var rng = RandomNumberGenerator.Create();
            byte[] data = new byte[32];
            rng.GetBytes(data);
            var resultToMap = BitConverter.ToInt32(data);
            resultToMap = Math.Sign(resultToMap) * resultToMap;
            var range = stopIndex - startIndex + 1;
            _ = Math.DivRem(resultToMap, range, out int result);
            return result + startIndex;
        }
    }
}
