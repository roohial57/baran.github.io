export const siteConfig = {
  name: "Roohallah Alizadeh",
  title: ".NET Developer",
  description:
    "Portfolio of Roohallah Alizadeh — .NET developer building backend systems, EF Core tools, and clean architecture.",
  accentColor: "#0F766E",
  social: {
    email: "roohial57@gmail.com",
    linkedin: "https://www.linkedin.com/in/roohallah-alizadeh-76747a1a9",
    twitter: "",
    github: "https://github.com/roohial57",
  },
  aboutMe:
    "I'm a .NET developer based in Tehran with 11+ years of experience building web applications, payment systems, and enterprise backends. I care about clean architecture, Entity Framework Core, and practical developer tooling — from NuGet packages that improve day-to-day workflows to boilerplates that help teams ship faster. Outside of work, I contribute open-source ideas back to the .NET ecosystem.",
  skills: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "PostgreSQL",
    "LINQ",
    "REST APIs",
    "Clean Architecture",
    "T-SQL",
    "Git",
    "Vue.js",
    "TypeScript",
  ],
  projects: [
    {
      name: "EFCommenter",
      description:
        "NuGet package that copies XML documentation from entities, properties, and enums into SQL Server and PostgreSQL table/column comments — one line in OnModelCreating.",
      link: "https://github.com/roohial57/DotNetComponent_EFCommenter",
      skills: ["C#", "EF Core", "NuGet", "SQL Server", "PostgreSQL"],
    },
    {
      name: "Clean Architecture Boilerplate",
      description:
        "C# starter for clean architecture projects, including shared abstractions and tooling to generate integration-test services from controllers.",
      link: "https://github.com/roohial57/CCharpCleanArchitectureBoilerplate",
      skills: ["C#", ".NET", "Clean Architecture"],
    },
    {
      name: "Admin Panel Boilerplate",
      description:
        "Vue 3 + TypeScript admin panel with feature-based structure, Pinia, OpenAPI client generation, Vitest, and Playwright e2e tests.",
      link: "https://github.com/roohial57/BoilerPlate_Front_AdminPanel",
      skills: ["Vue 3", "TypeScript", "Pinia", "Vitest", "Playwright"],
    },
    {
      name: "EF Core ExecuteInsertAsync Proposal",
      description:
        "Design exploration for server-side INSERT … SELECT in EF Core without loading rows into memory, mirroring existing bulk update and delete APIs.",
      link: "https://github.com/roohial57/efcore-ExecuteInsertAsync-",
      skills: ["C#", "EF Core", "SQL"],
    },
  ],
  experience: [
    {
      company: "Behpardaz Hamrah Samaneh Aval (Behsa)",
      title: ".NET Developer",
      dateRange: "2021 — Present",
      bullets: [
        "Build and maintain .NET backend services for a telecommunications company operating across multiple markets",
        "Work with ASP.NET Core, Entity Framework, and SQL Server on production systems",
        "Collaborate with cross-functional teams on reliable APIs and data-heavy features",
      ],
    },
    {
      company: "BistPay",
      title: "Web Programmer",
      dateRange: "Aug 2019 — Sep 2021",
      bullets: [
        "Developed web applications for mobile payment solutions and merchant portals",
        "Implemented backend features with ASP.NET and related Microsoft stack technologies",
        "Supported payment workflows and specialized services exposed through the company web portal",
      ],
    },
    {
      company: "Ayandeh Sazan Ertebat Parsian",
      title: "Programmer & Team Leader",
      dateRange: "Nov 2015 — Aug 2018",
      bullets: [
        "Led programming workstreams while contributing hands-on .NET development",
        "Guided teammates on delivery, code quality, and feature planning",
        "Built and maintained web applications with ASP.NET, SQL Server, and related tooling",
      ],
    },
    {
      company: "Darman Rayane",
      title: "Programmer",
      dateRange: "Dec 2013 — Sep 2015",
      bullets: [
        "Started professional career building and supporting software systems",
        "Worked with .NET, databases, and web application fundamentals",
        "Delivered features and maintenance for production business applications",
      ],
    },
  ],
  education: [] as {
    school: string;
    degree: string;
    dateRange: string;
    achievements: string[];
  }[],
};
