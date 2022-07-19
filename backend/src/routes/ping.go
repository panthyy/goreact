package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Ping(rg *gin.RouterGroup) {
	rg.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello from ping",
		})
	})

}
