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

        public void Invoke(HttpContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            Console.WriteLine($"{context.Request.Path.Value}");

            _ = InvokeInternal(context);
        }

        private async Task InvokeInternal(HttpContext context)
        {
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
