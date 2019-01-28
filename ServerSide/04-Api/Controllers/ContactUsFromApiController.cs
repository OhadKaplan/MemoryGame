using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OhadKaplan
{
    public class ContactUsFromApiController : ApiController
    {
        private ContactUsLogic contactUsLogic = new ContactUsLogic();

        [EnableCors("*", "*", "*")]
        [HttpPost]
        [Route("contactUsForm")]
        public HttpResponseMessage AddNewContactUsForm(ContactUsModel contactUsModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    string error = "Request Fromat Not Valid!!";
                    return Request.CreateResponse(HttpStatusCode.BadRequest, error);
                }
                
                ContactUsModel contactUsForm = contactUsLogic.AddNewContactUsForm(contactUsModel);
                return Request.CreateResponse(HttpStatusCode.Created, contactUsForm);

            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

    }
}
