using System;
using System.Collections.Generic;

namespace kitarsh.net.Models.TwitchConfig
{
    public interface ITwitchConfig
    {
        string BaseUrl { get; }

        string ApiService { get; }

        IDictionary<string, string> Parameters { get; }

        Uri GetUri();
    }
}
