using System.Net.Http;
using System.Threading.Tasks;
using kitarsh.net.Models.TwitchConfig;
using Microsoft.AspNetCore.Mvc;

namespace kitarsh.net.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TwitchController : ControllerBase
    {
        private TwitchTokens tokens = new TwitchTokens();

        [HttpGet]
        public async Task<string[]> Get()
        {
            using (var client = new HttpClient())
            {
                var videosConfig = new TwitchVideosConfig();
                videosConfig.AddParameter(tokens.UserId);
                var uri = videosConfig.GetUri();
                var request = new HttpRequestMessage(HttpMethod.Get, uri);
                request.Headers.Add(tokens.AuthorizationToken.Key, tokens.AuthorizationToken.Value);
                request.Headers.Add(tokens.ClientIdToken.Key, tokens.ClientIdToken.Value);

                HttpResponseMessage response = await client.SendAsync(request);
                return new string[] { await response.Content.ReadAsStringAsync() };
            }
        }
    }
}
