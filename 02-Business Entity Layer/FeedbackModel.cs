using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OhadKaplan
{
    public class FeedbackModel
    {
        public int id { get; set; }
        public int player { get; set; }
        public string playerName { get; set; }
        public DateTime? createDate { get; set; }
        public string text { get; set; }
    }
}
