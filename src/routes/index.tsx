import { createFileRoute } from "@tanstack/react-router";
import { CommunityHome } from "@/features/community/home";
import { communityQuery } from "@/features/community/data.functions";
import { pageHead } from "@/features/community/types";
export const Route = createFileRoute("/")({
  head: () => pageHead("Reading for Growth", "Discover your next great read and join a community of curious minds. Books, discussions, and the annual reading challenge."),
  loader: ({context}) => context.queryClient.ensureQueryData(communityQuery),
  component: CommunityHome,
});
