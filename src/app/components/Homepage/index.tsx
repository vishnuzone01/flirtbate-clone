"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import FilterSection from "./components/FilterSection";
import CardGrid from "./components/CardGrid";
import StepSection from "./components/StepSection";
import CustomPagination from "./components/CustomPagination";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <FilterSection />
      <CardGrid />
      <CustomPagination />
      <StepSection />
    </>
  );
};

export default Homepage;
