using System;
using System.Collections.Generic;
using System.IO;
using YamlDotNet.RepresentationModel;
using YamlDotNet.Serialization;

namespace kitarsh.net.Models.TwitchConfig
{
    public class TwitchTokens
    {
        public TwitchTokens()
        {
            using (var reader = new StreamReader("./Config/twitchtokens.config.yml"))
            {
                var content = reader.ReadToEnd();
                var deserialize = new DeserializerBuilder().Build();
                var twitchTokensModel = deserialize.Deserialize<TwitchTokensModel>(content);
                this.AuthorizationToken = new KeyValuePair<string, string>(nameof(twitchTokensModel.authorization), twitchTokensModel.authorization);
                this.ClientIdToken = new KeyValuePair<string, string>("client-id", twitchTokensModel.clientId);
                this.UserId = new KeyValuePair<string, string>("user_id", twitchTokensModel.userId);
            }
        }

        public KeyValuePair<string, string> AuthorizationToken { get; set; }

        public KeyValuePair<string, string> ClientIdToken { get; set; }

        public KeyValuePair<string, string> UserId { get; set; }
    }

    public class TwitchTokensModel
    {
        public string authorization { get; set; }
        public string clientId { get; set; }
        public string userId {get; set; }

    }
}
