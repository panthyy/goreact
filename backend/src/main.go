package main

import (
	"github.com/gin-gonic/gin"
	"github.com/panthyy/backend/src/routes"
)

func main() {
	r := gin.Default()

	routes.IndexRoutes(r.Group("/"))
	routes.Ping(r.Group("/ping"))
	r.Run()
}
