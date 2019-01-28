using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OhadKaplan
{
    public class PlayerLogic : BaseLogic
    {

        public PlayerModel GetPlayerDetails(int id)
        {
            Player player = DB.Players.SingleOrDefault(p => p.PlayerId == id);
            if (player == null)
            {
                return null;
            }
            else
            {
                PlayerModel playerModel = new PlayerModel();
                //playerModel.id = player.PlayerId;
                playerModel.fullName = player.FullName;
                playerModel.userName = player.UserName;
                playerModel.email = player.Email;
                return playerModel;
            };
        }

        //This function check is player can use in a user name
        public PlayerModel CheckForUserName(string un)
        {
            Player player = DB.Players.SingleOrDefault(p => (p.UserName).ToLower() == un.ToLower());
            if (player != null)
            {
                PlayerModel playerModel = GetPlayerDetails(player.PlayerId);
                return playerModel;
            }
            return null;
        }

        //This funcation check player's login details
        public PlayerModel CheckLoginValidation(string userName, string pw)
        {
            Player player = DB.Players.SingleOrDefault(p=> (p.UserName== userName && p.Password == pw));

            if (player!=null)
            {
                PlayerModel playerModel = GetPlayerDetails(player.PlayerId);
                playerModel.id = player.PlayerId;
                return playerModel;
            }
            return null;
        }

        public PlayerModel AddNewPlayer(PlayerModel playerModel)
        {
            Player player = new Player
            {
                FullName = playerModel.fullName,
                UserName = playerModel.userName,
                Password = playerModel.pW,
                Email = playerModel.email,
                //BirthDate = playerModel.bDate
            };
            DB.Players.Add(player);
            DB.SaveChanges();
            playerModel.id = player.PlayerId;
            return playerModel;
        }
    }

}


