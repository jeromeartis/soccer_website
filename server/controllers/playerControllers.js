const Player = require('../models/playerModels');


exports.getPlayers = async (req, res) => {
    Player.find({},(err, Player) => {
        if (err) {
            console.log(res)
            res.send(err);
            consol
        }
        res.json(Player);
    });
}

exports.addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) =>{
        if (err) {
             res.send(err);
        }
        res.json(Player);
    });
};


exports.getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId, (err, Player) => {
        if (err) {
            res.send(err)
        }
        res.json(Player)
    });
};

exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.PlayerId}, req.body, {new: true }, 
        (err, Player) => { // pass new data using req.body
        if (err) {
            res.send(err)
        }
        res.json(Player)
    });
};

exports.deletePlayer = (req, res) => {
    let player_id = req.params.PlayerId
    Player.remove({_id: req.params.PlayerId}, (err, Player) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: `Successfully Deleted ${player_id}`})
    });
};
