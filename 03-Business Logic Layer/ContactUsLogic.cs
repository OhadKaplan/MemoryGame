using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OhadKaplan
{
    public class ContactUsLogic:BaseLogic
    {
        public ContactUsModel AddNewContactUsForm(ContactUsModel contactUsModel)
        {
            ContactUsForm contactUsForm = new ContactUsForm
            {
                CreateDate = DateTime.Now,
                FirstName = contactUsModel.fName,
                LastName = contactUsModel.lName,
                PhoneNumber = contactUsModel.phone,
                Email = contactUsModel.email,
                Message = contactUsModel.formText,
                PlayerId = contactUsModel.player
            };
            DB.ContactUsForms.Add(contactUsForm);
            DB.SaveChanges();
            contactUsModel.formDate = contactUsForm.CreateDate;
            contactUsModel.id = contactUsForm.ContactUsId;
            return contactUsModel;
        }
    }
}
