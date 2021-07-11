using System;

namespace kitarsh.net.Models
{
    public class WeatherForecast
    {
        private const int ConstantToFarenheit = 32;
        private const double SlopeToFarentheit = (1 / 0.5556);

        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => ConstantToFarenheit + (int)(TemperatureC * SlopeToFarentheit);

        public string Summary { get; set; }
    }
}
