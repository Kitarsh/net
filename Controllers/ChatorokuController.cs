using System.Collections.Generic;
using System.Linq;
using kitarsh.net.data;
using kitarsh.net.data.Models;
using Microsoft.AspNetCore.Mvc;

namespace kitarsh.net.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatorokuController : ControllerBase
    {
        [HttpGet]
        public Article[] Get()
        {
            using (var dataDbContext = new KitarshNetContext())
            {
                var articles = dataDbContext.Articles.ToArray();
                var idsArticles = articles.Select(a => a.IdArticle)
                                          .ToList();
                var paragraphQuery = dataDbContext.Paragraphs.Where(p => idsArticles.Contains(p.IdArticle));
                _ = paragraphQuery.ToList();
                return articles;
                
            }
        }


        [HttpGet("GetArticle/{id}")]
        public Article[] GetArticle(int id)
        {
            using (var dataDbContext = new KitarshNetContext())
            {
                var article = dataDbContext.Articles.FirstOrDefault(a => a.IdArticle == id);
                var paragraphQuery = dataDbContext.Paragraphs.Where(p => p.IdArticle == id);
                _ = paragraphQuery.ToList();
                return new Article[] { article };
            }
        }

        [HttpPost]
        [Route("Article/Create")]
        public Article Create(Article article)
        {
            using (var dataDbContext = new KitarshNetContext())
            {
                article.AddToDatabase(dataDbContext);
                dataDbContext.SaveChanges();
                return article;
            }
        }

        [HttpPost]
        [Route("Paragraph/Create")]
        public void CreateParagraph(Paragraph paragraph)
        {
            using(var dataDbContext = new KitarshNetContext())
            {
                paragraph.AddToDatabase(dataDbContext);
                dataDbContext.SaveChanges();
            }
        }

        [HttpPost]
        [Route("Paragraph/Edit")]
        public void EditParagraph(Paragraph paragraph)
        {
            using(var dataDbContext = new KitarshNetContext())
            {
                var paragraphFromDb = dataDbContext.Paragraphs.FirstOrDefault(p => p.IdParagraph == paragraph.IdParagraph);
                paragraphFromDb.Title = paragraph.Title;
                paragraphFromDb.Text = paragraph.Text;
                paragraphFromDb.Image = paragraph.Image;
                dataDbContext.SaveChanges();
            }
        }

        [HttpPost]
        [Route("Paragraph/Delete")]
        public void DeleteParagraph(Paragraph paragraph)
        {
            using(var dataDbContext = new KitarshNetContext())
            {
                var paragraphFromDb = dataDbContext.Paragraphs.FirstOrDefault(p => p.IdParagraph == paragraph.IdParagraph);
                dataDbContext.Paragraphs.Remove(paragraphFromDb);
                dataDbContext.SaveChanges();
            }
        }

        [HttpPost]
        [Route("Article/Edit")]
        public void EditArticle(Article article)
        {
            using(var dataDbContext = new KitarshNetContext())
            {
                var articleFromDb = dataDbContext.Articles.FirstOrDefault(a => a.IdArticle == article.IdArticle);
                articleFromDb.Title = article.Title;
                dataDbContext.SaveChanges();
            }
        }
    }
}
