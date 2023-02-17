var express = require('express'),
    router = express.Router();

var playerControllers = require('../controllers/playerControllers');


router.get('/players', playerControllers.getPlayers);
router.get('/player/:PlayerId',playerControllers.getPlayerWithID);
router.post('/players', playerControllers.addNewPlayer);
router.put('/player/:PlayerId', playerControllers.updatePlayer);
router.delete('/player/:PlayerId',playerControllers.deletePlayer);

module.exports = router