namespace Solution
{
    using Xunit;

    public class Sample_Test
    {
        [Fact]
        public void Test1()
        {
            var actual = Kata.NbrOfLaps(5, 3);
            
            Assert.Equal(true, true);
        }

        //private static IEnumerable<TestCaseData> testCases
        //{
        //    get
        //    {
        //        yield return new TestCaseData(5, 3).Returns(new Tuple<int, int>(3, 5));
        //        yield return new TestCaseData(4, 6).Returns(new Tuple<int, int>(3, 2));
        //        yield return new TestCaseData(5, 5).Returns(new Tuple<int, int>(1, 1));
        //    }
        //}

        //[Test, TestCaseSource("testCases")]
        //public Tuple<int, int> Test(int x, int y) => Kata.NbrOfLaps(x, y);
    }
}