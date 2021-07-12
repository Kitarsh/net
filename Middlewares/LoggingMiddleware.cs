using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace kitarsh.net.Middlewares
{
    public class LoggingMiddleware
    {
        private readonly RequestDelegate next;

        public LoggingMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
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
