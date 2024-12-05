import ChangeThemeButton from "@/components/theme/ChangeThemeButton";
import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="p-8">
      <ChangeThemeButton />

      <Typography variant="h1">Hello World</Typography>

      <Button variant="contained">Hello world</Button>
    </div>
  );
}
