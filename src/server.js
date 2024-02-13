import { createServer, Model } from "miragejs"
import { scratch, mit , roblox, uiUx, web, python, adeleye} from "./assets/images"
import { checked } from "./assets/icons"



createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", students: 19, rating: 4.1,name: "The Complete Scratch Course for Beginners", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: scratch, type: "Scratch", instructorUrl: adeleye , tick: checked})
        server.create("van", { id: "2", students: 13, rating: 4.3,name: "MIT Application Development", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: mit, type: "MIT", instructorUrl: adeleye , tick: checked})
        server.create("van", { id: "3", students: 7, rating: 4.1,name: "The Roblox Game Development Course", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: roblox , type: "Roblox", instructorUrl: adeleye , tick: checked})
        server.create("van", { id: "4", students: 10, rating: 3.9,name: "The Ultimate UI/UX Design Mastery Course", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: uiUx , type: "Design", instructorUrl: adeleye, tick: checked})
        server.create("van", { id: "5", students: 13, rating: 4.4,name: "Advanced Web Development", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: web, type: "Development", instructorUrl: adeleye , tick: checked})
        server.create("van", { id: "6", students: 5, rating: 4.6,name: "Python Complete Course For Beginners", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: python, type: "Python", instructorUrl: adeleye , tick: checked})
        server.create("van", { id: "7", students: 25, rating: 4.8,name: "The Ultimate JavaScript Mastery Course for Beginners", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: scratch, type: "Development", instructorUrl: adeleye , tick: checked})
        server.create("van", { id: "8", students: 20, rating: 4.3,name: "Introduction to Artificial Intelligence", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: mit, type: "Python", instructorUrl: adeleye , tick: checked})
        server.create("van", { id: "9", students: 18, rating: 4.5,name: "Advanced Scratch Development", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: roblox , type: "Scratch", instructorUrl: adeleye , tick: checked})
        server.create("van", { id: "10", students: 29, rating: 4.6,name: "Data Analytics", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: uiUx , type: "Python", instructorUrl: adeleye, tick: checked})
        server.create("van", { id: "11", students: 12, rating: 4.7,name: "React", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: web, type: "Development", instructorUrl: adeleye , tick: checked})
        server.create("van", { id: "12", students: 7, rating: 4.3,name: "Advanced UX Course", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: python, type: "Design", instructorUrl: adeleye , tick: checked})
   
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