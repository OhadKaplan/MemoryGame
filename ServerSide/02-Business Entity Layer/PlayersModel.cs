using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OhadKaplan
{
    public class PlayerModel
    {
        public int id { get; set; }
        public string fullName{ get; set; }
        public string userName{ get; set; }
        public string pW { get; set; } //TBD Hashed
        public string email { get; set; }
        public DateTime bDate { get; set; }
    }
}
