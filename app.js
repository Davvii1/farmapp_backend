import express from "express";
import usersRoutes from './routes/users.js'
import appointmentsRoutes from './routes/appointments.js'
import treatmentsRoutes from './routes/treatments.js'
import farmaciesRoutes from './routes/farmacies.js'
import medicinesRoutes from './routes/medicines.js'

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Middleware
app.use(express.json());

//Main
app.get("/", async (req, res) => {
  res.json({ message: "Backend API REST for FarmApp" });
});

//Routes
app.use('/api/appointments', appointmentsRoutes)
app.use('/api/treatments', treatmentsRoutes)
app.use('/api/farmacies', farmaciesRoutes)
app.use('/api/medicines', medicinesRoutes)
app.use('/api/users', usersRoutes)

export default app