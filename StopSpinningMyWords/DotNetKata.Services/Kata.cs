using System.Text;

public class Kata
{
    public static string SpinWords(string sentence)
    {
        var output = new StringBuilder();
        var words = sentence.Split(' ');
        for(int i = 0; i < words.Length; i++)
        {
            output.Append(words[i].Length >= 5 ? ReverseWord(words[i]) : words[i]);
            output.Append((i + 1) < words.Length ? " " : string.Empty);
        }
        return output.ToString();
    }

    private static string ReverseWord(string word)
    {
        var output = new StringBuilder();
        for(var i = word.Length; i > 0; i--)
        {
            output.Append(word[i - 1]);
        }
        return output.ToString();
    }
}