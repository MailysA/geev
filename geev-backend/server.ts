import app from "./src/constants/app";
import { PORT } from "./src/constants/constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));