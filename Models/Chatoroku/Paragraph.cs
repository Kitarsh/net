namespace kitarsh.net.Models.Chatoroku
{
    public class Paragraph
    {
        public string title { get; set; }
        public string image { get; set; }
        public string text { get; set; }

        public static Paragraph Default() {
            return new Paragraph {
                title = "This is Rocket League!",
                text = "Amazing first paragraph",
                image = null,
            };
        }
    }
}
