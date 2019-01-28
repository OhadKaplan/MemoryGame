using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OhadKaplan
{
    public class ResultModel
    {
        public int  id{ get; set; }
        public int player{ get; set; }
        public string playerName { get; set; }
        public DateTime takenDate { get; set; }
        public TimeSpan duration { get; set; }
        public int steps { get; set; }
    }
}


 