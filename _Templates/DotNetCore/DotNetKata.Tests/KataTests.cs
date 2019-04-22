using DotNetKata.Services;
using Xunit;

namespace DotnetKata.Tests
{
    public class KataTests
    {
        [Fact]
        public void SampleTest()
        {
            Assert.True(Kata.ReturnString(5).Length == 5);
        }
    }
}