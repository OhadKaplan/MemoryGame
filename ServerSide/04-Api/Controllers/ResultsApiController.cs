using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OhadKaplan
{
    
    public class ResultsApiController : ApiController
    {
        private ResultLogic resultLogic = new ResultLogic();

        [EnableCors("*", "*", "*")]
        [HttpGet]
        [Route("results")]
        public HttpResponseMessage GetAllResults()
        {
            try
            {
                List<ResultModel> results = resultLogic.GetScores();
                return Request.CreateResponse(HttpStatusCode.OK, results);

            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [EnableCors("*", "*", "*")]
        [HttpPost]
        [Route("results")]
        public HttpResponseMessage AddPlayerScore(ResultModel resultModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    string error = "Invalid record string";
                    return Request.CreateResponse(HttpStatusCode.BadRequest,error);
                }
                ResultModel rm = resultLogic.AddNewResult(resultModel);
                return Request.CreateResponse(HttpStatusCode.Created, rm);

            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [EnableCors("*", "*", "*")]
        [HttpGet]
        [Route("results/top")]
        public HttpResponseMessage GetTopResults()
        {
            try
            {
                List<ResultModel> results = resultLogic.GetScores(3);
                return Request.CreateResponse(HttpStatusCode.OK, results);

            }
            catch (Exception ex )
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}
