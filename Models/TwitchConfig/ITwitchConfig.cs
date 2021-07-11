using System;
using System.Collections.Generic;

namespace kitarsh.net.Models.TwitchConfig
{
    public interface ITwitchConfig
    {
        Uri BaseUrl { get; }

        string ApiService { get; }

        IDictionary<string, string> Parameters { get; }

        Uri Uri { get; }
    }
}
