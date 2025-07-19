export const LogoBar = () => {
  const companies = [
    { name: "Salesforce", logo: "🏢" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Workday", logo: "💼" },
    { name: "Stripe", logo: "💳" },
    { name: "Notion", logo: "📝" },
    { name: "Linear", logo: "📐" },
  ];

  return (
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-base font-medium text-muted-foreground">
            Trusted by leading SaaS companies worldwide
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {company.logo}
              </span>
              <span className="font-semibold text-xl tracking-tight">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};