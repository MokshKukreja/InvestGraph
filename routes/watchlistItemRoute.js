const express = require("express")
const watchlistRouter = express.Router()
const {createWatchlist, getWatchlist, deleteWatchlist, checkWatchList} = require("../controllers/watchlistController")


watchlistRouter.post("/",createWatchlist)
watchlistRouter.get("/",getWatchlist)
watchlistRouter.get("/:name",checkWatchList)
watchlistRouter.delete("/:name",deleteWatchlist)

module.exports = watchlistRouter