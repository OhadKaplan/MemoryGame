using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OhadKaplan
{
    public class FeedbackApiController : ApiController       
    {
        private FeedbackLogic fbLogic = new FeedbackLogic();

        [EnableCors("*", "*", "*")]
        [HttpGet]
        [Route("feedbacks")]
        public HttpResponseMessage GetAllFeedbacks()
        {
            try
            {
                List<FeedbackModel> feedbacks = fbLogic.GetFeedbacks();
                return Request.CreateResponse(HttpStatusCode.OK, feedbacks);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        [EnableCors("*", "*", "*")]
        [HttpGet]
        [Route("topfeedbacks")]
        public HttpResponseMessage GetTopFeedbacks()
        {
            try
            {
                List<FeedbackModel> feedbacks = fbLogic.GetFeedbacks(5);
                return Request.CreateResponse(HttpStatusCode.OK, feedbacks);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        [EnableCors("*", "*", "*")]
        [HttpPost]
        [Route("feedbacks")]
        public HttpResponseMessage AddFeadback(FeedbackModel feedbackModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    string error = "{\"message\":\"Bad Request\" }";
                    return Request.CreateResponse(HttpStatusCode.BadRequest, error);
                }
                FeedbackModel fb = fbLogic.AddNewFeedback(feedbackModel);
                return Request.CreateResponse(HttpStatusCode.Created, fb);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}
