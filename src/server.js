import { createServer, Model } from "miragejs"
import { scratch, mit , roblox, uiUx, web, python } from "./assets/images/index"



createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "The Complete Scratch Programming Course for Beginners", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: scratch, type: "Technology", color: "blue-900" })
        server.create("van", { id: "2", name: "MIT Application Development", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: mit, type: "Technology", color: "red-900" })
        server.create("van", { id: "3", name: "The Roblox Game Development Course", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: roblox , type: "Technology", color: "red-900" })
        server.create("van", { id: "4", name: "The Ultimate UI/UX Design Mastery Course", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: uiUx , type: "Design", color: "black"})
        server.create("van", { id: "5", name: "Advanced Web Development", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: web, type: "Development", color: "blue-900" })
        server.create("van", { id: "6", name: "Python Complete Course For Beginners", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: python, type: "Development", color: "blue-900" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/vans", (schema) => {
            return schema.vans.all()
        })
        
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
})