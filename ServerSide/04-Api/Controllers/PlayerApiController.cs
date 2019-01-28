using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OhadKaplan.Controllers
{
    public class PlayerApiController : ApiController
    {
        private PlayerLogic playerLogic = new PlayerLogic();

        [EnableCors("*", "*", "*")]
        [HttpGet]
        [Route("players/{id}")]
        public HttpResponseMessage GetPlayerDetails(int id)
        {
            try
            {
                PlayerModel player = new PlayerModel();
                player = playerLogic.GetPlayerDetails(id);
                if (player == null)
                {
                    string error = "Player Not Found!!";
                    return Request.CreateResponse(HttpStatusCode.BadRequest, error);
                }

                return Request.CreateResponse(HttpStatusCode.OK, player);
            }
            catch (Exception ex)
            {
                {
                    return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

                }
            }
        }

        [EnableCors("*", "*", "*")]
        [HttpGet]
        [Route("playerUN/{userName}")]
        public HttpResponseMessage CheckNewPlayerForUserName(string userName)
        {
            try
            {
                
                if (playerLogic.CheckForUserName(userName) !=null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "1");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "0");
                }               
            }
            catch (Exception ex)
            {
                {
                    return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

                }
            }
        }

        [EnableCors("*", "*", "*")]
        [HttpPost]
        [Route("playerLogin")]
        public HttpResponseMessage GetPlayerDetails(PlayerModel playerModel)
        {
            try
            {
                PlayerModel player = new PlayerModel();
                player = playerLogic.CheckLoginValidation(playerModel.userName, playerModel.pW);
                if (player == null)
                {
                    string error = "99";//manage case in witch the user not found
                    return Request.CreateResponse(HttpStatusCode.Unauthorized, error);
                }
                return Request.CreateResponse(HttpStatusCode.OK, player);
            }
            catch (Exception ex)
            {
                {
                    return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

                }
            }
        }

        [EnableCors("*", "*", "*")]
        [HttpPost]
        [Route("players")]
        public HttpResponseMessage AddNewPlayer(PlayerModel playerModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    string error = "Input Data invalid!!!";
                    return Request.CreateResponse(HttpStatusCode.BadRequest, error);
                }
                PlayerModel pm = playerLogic.AddNewPlayer(playerModel);
                return Request.CreateResponse(HttpStatusCode.OK, pm);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
    }
}
