'use client';
import React from 'react';
import ProjectsSection from './_components/ProjectsSection';
import SkillsSection from './_components/SkillsSection';


export default function ProjectsPage() {
  return (
    <main className="bg-neutral-950">
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}