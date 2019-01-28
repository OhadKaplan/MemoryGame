using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OhadKaplan
{
    public class ContactUsModel
    {
        public int id { get; set; }
        public System.DateTime formDate { get; set; }
        public string fName{ get; set; }
        public string lName { get; set; }
        public string phone{ get; set; }
        public string email { get; set; }
        public string formText { get; set; }
        public int? player { get; set; }
    }
}
