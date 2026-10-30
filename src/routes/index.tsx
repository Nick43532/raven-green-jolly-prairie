import { createFileRoute } from "@tanstack/react-router";
import { GameApp } from "@/components/lab/game-app";

export const Route = createFileRoute("/")({
  component: GameApp,
});
