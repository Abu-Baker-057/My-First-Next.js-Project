import Image from "next/image";
import button from "@/components/primary button";
import input from "@/components/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-20">
      Home Page
      <br />
      <button className="bg-green-300 p-2 rounded-sm">Click me</button>
      <br />
      <button>Button components</button>
      <br />
      <Button>Time</Button>
      <Button>Settings</Button>

    </main>
  );
}
