namespace kitarsh.net.Models.Chatoroku
{
    public class Article
    {
        public string title { get; set; }

        public Paragraph[] paragraphs { get; set; }

        public static Article Default()
        {
            return new Article
            {
                title = "Rocket League from BackServer",
                paragraphs = new Paragraph[] {
                    Paragraph.Default(),
                    Paragraph.Default(),
                },
            };
        }
    }
}
