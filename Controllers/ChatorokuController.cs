using System.Collections.Generic;
using kitarsh.net.Models.Chatoroku;
using Microsoft.AspNetCore.Mvc;

namespace kitarsh.net.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatorokuController : ControllerBase
    {
        private const int TmpNbOfArticles = 20;

        [HttpGet]
        public Article[] Get()
        {
            var result = new List<Article> { };
            for (int i = 0; i < TmpNbOfArticles; i++)
            {
                var newArticle = Article.Default();
                newArticle.idArticle = i;
                result.Add(newArticle);
            }
            return result.ToArray();
        }

        [HttpGet("GetArticle/{id}")]
        public Article[] GetArticle(int id)
        {
            return new[] { Article.Default() };
        }
    }
}
