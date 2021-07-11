using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace kitarsh.net.Models.TwitchConfig
{
    public class TwitchVideosConfig : ITwitchConfig
    {
        private readonly IDictionary<string, string> _parameters = new Dictionary<string, string>();
        public Uri BaseUrl => new Uri("https://api.twitch.tv/helix/");

        public string ApiService => "videos";

        public IDictionary<string, string> Parameters => this._parameters;

        public Uri Uri
        {
            get
            {
                var strBuilder = new StringBuilder();
                strBuilder.Append(this.BaseUrl);
                strBuilder.Append(this.ApiService);
                strBuilder.Append('?');
                strBuilder.AppendJoin("&", this.Parameters.Select(p => p.Key + "=" + p.Value).ToList());
                return new Uri(strBuilder.ToString());
            }
        }

        public void AddParameter(string key, string value)
        {
            this.Parameters.Add(key, value);
        }

        public void AddParameter(KeyValuePair<string, string> parameter)
        {
            this.Parameters.Add(parameter);
        }
    }
}
