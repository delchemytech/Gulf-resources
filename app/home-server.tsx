import { Metadata } from "next";
import HomeClient from "./home-client";

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "Gulf Resources - Professional Business Solutions in UAE & India",
  description: "Gulf Resources provides comprehensive facilities management, business setup, visa services, and travel solutions across UAE and India. Trusted partner since 2016.",
};

export default function HomeServer() {
  return <HomeClient />;
}