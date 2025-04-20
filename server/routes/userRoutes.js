import { getUserData, purcahseCourse, userEnrolledCourses } from "../controllers/userController.js"
import express from 'express'


const userRouter = express.Router()

userRouter.get('/data', getUserData)
userRouter.get('/enrolled-courses', userEnrolledCourses)
userRouter.post('/purchase', purcahseCourse)

export default userRouter;