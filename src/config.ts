export const siteConfig = {
  name: "Roohallah Alizadeh",
  shortName: "Roohallah",
  title: ".NET Developer",
  description:
    "Roohallah Alizadeh — .NET developer specializing in ASP.NET Core, Entity Framework, and clean architecture.",
  url: "https://roohial57.github.io/",
  accentColor: "#00C2FF",
  email: "roohial57@gmail.com",
  cvUrl: "https://www.linkedin.com/in/roohallah-alizadeh-76747a1a9",
  social: {
    linkedin: "https://www.linkedin.com/in/roohallah-alizadeh-76747a1a9",
    github: "https://github.com/roohial57",
  },
  heroSkills: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "EF Core",
    "SQL Server",
    "PostgreSQL",
    "Clean Architecture",
    "Vue.js",
  ],
  heroBio:
    "Specializing in ASP.NET Core & EF Core. I build reliable backends, developer tooling, and clean architecture systems.",
  aboutTitle: "Problem solver <coder>",
  aboutSubtitle: ".NET Developer with over 11 years of experience",
  aboutPoints: [
    "Backend specialist focused on C#, ASP.NET Core, Entity Framework Core, and SQL Server in production systems.",
    "I build practical developer tools — including EFCommenter on NuGet — and clean architecture boilerplates teams can ship with.",
    "Comfortable leading and collaborating: from team-lead roles to open-source contributions in the .NET ecosystem.",
  ],
  techStack: [
    {
      name: "C#",
      description: "Strong C# knowledge for modern backend and tooling development.",
    },
    {
      name: ".NET",
      description: "Building production services and libraries on the .NET platform.",
    },
    {
      name: "ASP.NET Core",
      description: "APIs and web backends with clean structure and solid performance.",
    },
    {
      name: "EF Core",
      description: "Data access, modeling, and database tooling for SQL Server & PostgreSQL.",
    },
    {
      name: "SQL Server",
      description: "Designing and optimizing relational data for enterprise workloads.",
    },
    {
      name: "Git",
      description: "Source control, branching workflows, and collaborative delivery.",
    },
    {
      name: "Vue.js",
      description: "Admin panels and frontend apps when the product needs a UI layer.",
    },
    {
      name: "TypeScript",
      description: "Typed frontend tooling and maintainable client-side codebases.",
    },
  ],
  projects: [
    {
      name: "EFCommenter",
      stack: "C# + EF Core + NuGet + SQL Server",
      description:
        "NuGet package that copies XML docs from entities and enums into database table and column comments — one line in OnModelCreating.",
      live: "https://www.nuget.org/packages/EFCommenter",
      github: "https://github.com/roohial57/DotNetComponent_EFCommenter",
      category: "tools",
    },
    {
      name: "Clean Architecture Boilerplate",
      stack: "C# + .NET + Clean Architecture",
      description:
        "Starter for clean architecture projects with shared abstractions and tooling to generate integration-test services from controllers.",
      live: "",
      github: "https://github.com/roohial57/CCharpCleanArchitectureBoilerplate",
      category: "apps",
    },
    {
      name: "Admin Panel Boilerplate",
      stack: "Vue 3 + TypeScript + Pinia + Playwright",
      description:
        "Feature-based admin panel with OpenAPI client generation, Vitest unit tests, and Playwright e2e coverage.",
      live: "",
      github: "https://github.com/roohial57/BoilerPlate_Front_AdminPanel",
      category: "apps",
    },
    {
      name: "ExecuteInsertAsync Proposal",
      stack: "C# + EF Core + SQL",
      description:
        "Design exploration for server-side INSERT … SELECT in EF Core without loading rows into memory.",
      live: "",
      github: "https://github.com/roohial57/efcore-ExecuteInsertAsync-",
      category: "tools",
    },
  ],
};
