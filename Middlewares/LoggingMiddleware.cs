using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading.Tasks;

namespace kitarsh.net.Middlewares
{
    public class LoggingMiddleware
    {
        private RequestDelegate next;

        public LoggingMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            Console.WriteLine($"{context.Request.Path.Value}");

            try
            {
                await this.next(context);
            }
            finally
            {
                // do nothing
            }
        }
    }
}