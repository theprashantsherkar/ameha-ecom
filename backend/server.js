import { app } from "./index.js";

app.listen(process.env.PORT, () => {
    console.log(`Server is running at PORT:${process.env.PORT}`);
})